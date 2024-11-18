package com.onlineShop.service;

import com.onlineShop.models.Product.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public interface ProductService {

    ResponseEntity<HttpStatus> add(Product product);

    ResponseEntity<Product> getById(String id);

    ResponseEntity<Product> getByTitle(String title);

    ResponseEntity<HttpStatus> update(Product product);

    ResponseEntity<HttpStatus> delete(String id);

}