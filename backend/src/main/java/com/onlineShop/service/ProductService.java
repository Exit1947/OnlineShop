package com.onlineShop.service;

import com.onlineShop.dto.ProductCardInfoResponse;
import com.onlineShop.dto.productDto.ProductResponse;
import com.onlineShop.models.Product.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public interface ProductService {

    ResponseEntity<String> save(Product product);

    ResponseEntity<ProductResponse> getById(String id);

    ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(String id);

    ResponseEntity<ProductResponse> getByTitle(String title);

    ResponseEntity<ProductCardInfoResponse> getProductCardInfoByTitle(String title);

    ResponseEntity<HttpStatus> update(Product product);

    ResponseEntity<HttpStatus> delete(String id);

}