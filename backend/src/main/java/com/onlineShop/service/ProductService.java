package com.onlineShop.service;

import com.onlineShop.dto.MediaFiles;
import com.onlineShop.dto.ProductCardInfoResponse;
import com.onlineShop.models.Product.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public interface ProductService {

    ResponseEntity<String> save(Product product);

    ResponseEntity<Product> getById(String id);

    ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(String id);

    ResponseEntity<Product> getByTitle(String title);

    ResponseEntity<ProductCardInfoResponse> getProductCardInfoByTitle(String title);

    ResponseEntity<HttpStatus> update(Product product);

    ResponseEntity<HttpStatus> delete(String id);

}