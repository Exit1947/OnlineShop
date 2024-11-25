package com.onlineShop.service.serviceImpl;

import com.onlineShop.converter.product.ProductConverter;
import com.onlineShop.dto.CharacteristicDto;
import com.onlineShop.dto.product.*;
import com.onlineShop.dto.product.ProductCardInfoResponse;
import com.onlineShop.dto.media.MediaResponse;
import com.onlineShop.models.Product.DiscountProduct;
import com.onlineShop.models.Product.Product;
import com.onlineShop.models.Product.Characteristic.ProductCharacteristic;
import com.onlineShop.models.Users.EndUserEntities.LikedProduct;
import com.onlineShop.models.Users.EndUserEntities.shoppingOrder.OrderedProducts;
import com.onlineShop.repository.ProductRepository;
import com.onlineShop.service.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    private final MediaService mediaService;

    private final DiscountProductService discountProductService;

    private final AmazonS3CloudService s3CloudService;

    private final OrderedProductsService orderedProductsService;

    private final LikedProductService likedProductService;

    private final ProductInventoryService productInventoryService;

    private final FeedbackService feedbackService;

    @Autowired
    public ProductServiceImpl(final ProductRepository productRepository, final MediaService mediaService,
                              final DiscountProductService discountProductService, final AmazonS3CloudService s3CloudService,
                              final OrderedProductsService orderedProductsService, final LikedProductService likedProductService,
                              final ProductInventoryService productInventoryService, FeedbackService feedbackService) {
        this.productRepository = productRepository;
        this.mediaService = mediaService;
        this.discountProductService = discountProductService;
        this.s3CloudService = s3CloudService;
        this.orderedProductsService = orderedProductsService;
        this.likedProductService = likedProductService;
        this.productInventoryService = productInventoryService;
        this.feedbackService = feedbackService;
    }

    @Override
    @Transactional
    public ResponseEntity<String> save(final ProductRequest productRequest) {
            Optional<Product> existingProduct = productRepository.findByTitle(productRequest.getTitle());
            if (existingProduct.isEmpty()) {
                Product product = ProductConverter.toProduct(productRequest);

                productRepository.save(product);

                if (product.isDiscount()) {
                    DiscountProduct discountProduct = DiscountProduct.builder()
                            .product(product)
                            .discount(productRequest.getDiscount())
                            .dateFrom(productRequest.getDateFrom())
                            .dateTo(productRequest.getDateTo())
                            .build();

                    discountProductService.save(discountProduct);
                }

                return new ResponseEntity<>(mediaService.createSessionForMedia(product), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @Override
    public ResponseEntity<ProductResponse> getById(String id) {
        Optional<Product> existingProduct = productRepository.findById(id);
        return getProductResponseEntity(existingProduct);
    }

    @Override
    public ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(String id) {
        Optional<Product> existingProduct = productRepository.findById(id);
        return getProductCardInfoResponseResponseEntity(existingProduct);
    }

    @Override
    public ResponseEntity<ProductResponse> getByTitle(String title) {
        Optional<Product> existingProduct = productRepository.findByTitle(title);
        return getProductResponseEntity(existingProduct);
    }

    @Override
    public ResponseEntity<ProductCardInfoResponse> getProductCardInfoByTitle(String title) {
        Optional<Product> existingProduct = productRepository.findByTitle(title);
        return getProductCardInfoResponseResponseEntity(existingProduct);
    }

    private ResponseEntity<ProductResponse> getProductResponseEntity(Optional<Product> existingProduct) {
        if(existingProduct.isPresent()) {
            Product product = existingProduct.get();

            ProductResponse productResponse = ProductConverter.toProductResponse(product);
            productResponse.setDiscount(getDiscount(product));

            List<CharacteristicDto> characteristicList = product.getCharacteristicValues()
                    .stream()
                    .sorted(Comparator.comparingInt(ProductCharacteristic::getNumber))
                    .map((productCharacteristic)->
                                    CharacteristicDto.builder()
                                            .id(productCharacteristic.getId())
                                            .name(productCharacteristic.getCharacteristic().getName())
                                            .value(productCharacteristic.getValue())
                                            .description(productCharacteristic.getCharacteristic().getDescription())
                                            .characteristicId(productCharacteristic.getCharacteristic().getId())
                                            .build()).toList();
            productResponse.setCharacteristicValuesList(characteristicList);

            List<MediaResponse> mediaList = mediaService.getAllForProduct(product.getId()).getBody();
            if (mediaList != null && !mediaList.isEmpty()) {
                productResponse.setMediaList(mediaList);
            }

            return new ResponseEntity<>(productResponse, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private ResponseEntity<ProductCardInfoResponse> getProductCardInfoResponseResponseEntity(Optional<Product> existingProduct) {
        if(existingProduct.isPresent()) {
            Product product = existingProduct.get();

            String thumbnailImage = s3CloudService.get(product.getThumbnailImage());

            ProductCardInfoResponse productCardInfoResponse = ProductCardInfoResponse.builder()
                    .id(product.getId())
                    .title(product.getTitle())
                    .price(product.getPrice())
                    .discount(getDiscount(product))
                    .countOfFeedbacks(feedbackService.getAllFeedbacksForProduct(product.getId()).size())
                    .thumbnailImage(thumbnailImage)
                    .build();

            return new ResponseEntity<>(productCardInfoResponse, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> update(final ProductRequest productRequest) {
        Optional<Product> existingProduct = productRepository.findById(productRequest.getId());
        if(existingProduct.isPresent()){
            Product product = ProductConverter.toProduct(productRequest);

            productRepository.save(product);


            if(product.isDiscount()) {
                Optional<DiscountProduct> existingDiscountProduct = discountProductService.findByProductId(product.getId());
                if(existingDiscountProduct.isPresent()){
                    DiscountProduct discountProduct = DiscountProduct.builder()
                                    .id(existingDiscountProduct.get().getId())
                                    .product(product)
                                    .discount(productRequest.getDiscount())
                                    .dateFrom(productRequest.getDateFrom())
                                    .dateTo(productRequest.getDateTo())
                                    .build();
                    discountProductService.update(discountProduct);
                }
            }

            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> delete(String id) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if(existingProduct.isPresent()){
            Product product = existingProduct.get();

            deleteFromDiscountProductIfExist(id);
            deleteFromMediaProductIfExist(id);
            deleteFromOrderedProductsIfExist(id);
            deleteFromLikedProductIfExist(id);
            deleteFromProductInventoryIfExist(id);
            deleteFromFeedbackIfExist(id);
            product.setCharacteristicValues(null);

            s3CloudService.delete(product.getThumbnailImage());

            productRepository.deleteById(id);

            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private int getDiscount(Product product){
        int discount = 0;
        if(product.isDiscount()) {
            Optional<DiscountProduct> discountProduct = discountProductService.findByProductId(product.getId());
            if (discountProduct.isPresent()) {
                discount = discountProduct.get().getDiscount();
            }
        }

        return discount;
    }

    private void deleteFromDiscountProductIfExist(String productId){
        Optional<DiscountProduct> discount = discountProductService.findByProductId(productId);
        discount.ifPresent(discountProduct -> discountProductService.delete(discountProduct.getId()));
    }

    private void deleteFromFeedbackIfExist(String productId){
        feedbackService.deleteAllForProduct(productId);
    }

    private void deleteFromMediaProductIfExist(String productId){
        List<MediaResponse> mediaList = mediaService.getAllForProduct(productId).getBody();
        if(mediaList!=null && !mediaList.isEmpty()) {
            mediaList
                    .forEach(media -> mediaService.delete(media.getId()));
        }
    }

    private void deleteFromOrderedProductsIfExist(String productId){
        List<OrderedProducts> orderedProducts = orderedProductsService.findAllByProductId(productId);
        if(orderedProducts!=null && !orderedProducts.isEmpty()) {
            orderedProductsService.deleteAll(orderedProducts);
        }
    }

    private void deleteFromLikedProductIfExist(String productId){
        List<LikedProduct> likedProducts = likedProductService.getAllLikedProductsByProductId(productId);
        if(likedProducts!=null && !likedProducts.isEmpty()) {
            likedProductService.deleteAll(likedProducts);
        }
    }

    private void deleteFromProductInventoryIfExist(String productId){
        productInventoryService.deleteAllProductInventoryByProductId(productId);
    }

}
