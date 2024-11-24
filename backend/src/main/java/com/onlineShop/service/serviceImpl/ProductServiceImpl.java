package com.onlineShop.service.serviceImpl;

import com.onlineShop.dto.productDto.CharacteristicDto;
import com.onlineShop.dto.ProductCardInfoResponse;
import com.onlineShop.dto.productDto.MediaResponse;
import com.onlineShop.dto.productDto.ProductRequest;
import com.onlineShop.dto.productDto.ProductResponse;
import com.onlineShop.models.Product.DiscountProduct;
import com.onlineShop.models.Product.Product;
import com.onlineShop.repository.ProductRepository;
import com.onlineShop.service.AmazonS3CloudService;
import com.onlineShop.service.DiscountProductService;
import com.onlineShop.service.MediaService;
import com.onlineShop.service.ProductService;
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

    @Autowired
    public ProductServiceImpl(final ProductRepository productRepository, final MediaService mediaService, final DiscountProductService discountProductService, final AmazonS3CloudService s3CloudService) {
        this.productRepository = productRepository;
        this.mediaService = mediaService;
        this.discountProductService = discountProductService;
        this.s3CloudService = s3CloudService;
    }

    @Override
    @Transactional
    public ResponseEntity<String> save(final ProductRequest productRequest) {
        if(productRequest != null) {
            Optional<Product> existingProduct = productRepository.findByTitle(productRequest.getTitle());
            if (existingProduct.isEmpty()) {

                Product product = Product.builder()
                        .id(UUID.randomUUID().toString())
                        .title(productRequest.getTitle())
                        .price(productRequest.getPrice())
                        .discount(productRequest.getDiscount() > 0)
                        .build();

                productRepository.save(product);

                if (productRequest.getDiscount() > 0) {
                    DiscountProduct discountProduct = DiscountProduct.builder()
                            .product(product)
                            .discount(productRequest.getDiscount())
                            .dateFrom(productRequest.getDateFrom())
                            .dateTo(productRequest.getDateTo())
                            .build();

                    discountProductService.save(discountProduct);
                }

                String idForSavingMedia = UUID.randomUUID().toString();
                //to do: write method in service for saving media by produced id

                return ResponseEntity.ok(idForSavingMedia);
            }
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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

    private ResponseEntity<ProductResponse> getProductResponseEntity(Optional<Product> existingProduct) {
        if(existingProduct.isPresent()) {
            Product product = existingProduct.get();

            ProductResponse productResponse = ProductResponse
                    .builder()
                    .id(product.getId())
                    .title(product.getTitle())
                    .price(product.getPrice())
                    .discount(getDiscount(product))
                    .characteristicValuesList(
                            product.getCharacteristicValues()
                                    .stream()
                                    .map((productCharacteristic)->
                                        CharacteristicDto.builder()
                                                .id(productCharacteristic.getId())
                                                .name(productCharacteristic.getCharacteristic().getName())
                                                .value(productCharacteristic.getValue())
                                                .description(productCharacteristic.getCharacteristic().getDescription())
                                                .characteristicId(productCharacteristic.getCharacteristic().getId())
                                                .build()
                                    ).toList())
                    .mediaList(mediaService.getAllForProduct(product)
                            .stream()
                            .map((media)->
                                    MediaResponse.builder()
                                            .id(media.getId())
                                            .mediaUrl(s3CloudService.get(media.getMediaName()))
                                            .build()).toList())
                    .build();

            return new ResponseEntity<>(productResponse, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<ProductCardInfoResponse> getProductCardInfoByTitle(String title) {
        Optional<Product> existingProduct = productRepository.findByTitle(title);
        return getProductCardInfoResponseResponseEntity(existingProduct);
    }

    private ResponseEntity<ProductCardInfoResponse> getProductCardInfoResponseResponseEntity(Optional<Product> existingProduct) {
        if(existingProduct.isPresent()) {
            Product product = existingProduct.get();

            String thumbnailImage = s3CloudService.get(product.getThumbnailImage());

            ProductCardInfoResponse productCardInfoResponse = ProductCardInfoResponse.builder()
                    .id(product.getId())
                    .title(product.getTitle())
                    .discount(getDiscount(product))
                    .countOfFeedbacks(product.getFeedbacks().size())
                    .price(product.getPrice())
                    .thumbnailImage(thumbnailImage)
                    .build();

            return new ResponseEntity<>(productCardInfoResponse, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> update(final Product product) {
        Optional<Product> existingProduct = productRepository.findByTitle(product.getTitle());
        if(existingProduct.isPresent()){
            product.setId(existingProduct.get().getId());
            productRepository.save(product);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    public ResponseEntity<HttpStatus> delete(String id) {
        if(productRepository.existsById(id)){
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

}
