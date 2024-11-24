package com.onlineShop.service.serviceImpl;

import com.onlineShop.dto.MediaFiles;
import com.onlineShop.dto.ProductCardInfoResponse;
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
    public ResponseEntity<String> save(final Product product) {
        Optional<Product> existingProduct = productRepository.findByTitle(product.getTitle());
        if(existingProduct.isEmpty()) {
            product.setId(UUID.randomUUID().toString());
            productRepository.save(product);

            String idForSavingMedia = UUID.randomUUID().toString();
            //to do: write method in service for saving media by produced id

            return ResponseEntity.ok(idForSavingMedia);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @Override
    public ResponseEntity<Product> getById(String id) {
        Optional<Product> existingProduct = productRepository.findById(id);
        return getProductResponseEntity(existingProduct);
    }

    @Override
    public ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(String id) {
        Optional<Product> existingProduct = productRepository.findById(id);
        return getProductCardInfoResponseResponseEntity(existingProduct);
    }

    @Override
    public ResponseEntity<Product> getByTitle(String title) {
        Optional<Product> existingProduct = productRepository.findByTitle(title);
        return getProductResponseEntity(existingProduct);
    }

    private ResponseEntity<Product> getProductResponseEntity(Optional<Product> existingProduct) {
        if(existingProduct.isPresent()) {
            Product product = existingProduct.get();
            if(!product.getThumbnailImage().isEmpty()) {
                product.setThumbnailImage(s3CloudService.get(product.getThumbnailImage()));
            }

            return new ResponseEntity<>(product, HttpStatus.OK);
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

            int discount = 0;
            if(product.isDiscount()) {
                Optional<DiscountProduct> discountProduct = discountProductService.findByProductId(product.getId());
                if (discountProduct.isPresent()) {
                    discount = discountProduct.get().getDiscount();
                }
            }

            ProductCardInfoResponse productCardInfoResponse = ProductCardInfoResponse.builder()
                    .id(product.getId())
                    .title(product.getTitle())
                    .discount(discount)
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

}
