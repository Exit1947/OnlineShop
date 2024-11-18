package com.onlineShop.controllers;

import com.onlineShop.dto.MediaFilesRequest;
import com.onlineShop.dto.ProductCardInfoResponse;
import com.onlineShop.models.Product.Product;
import com.onlineShop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(final ProductService productService) {
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<HttpStatus> save(@RequestBody Product product, MediaFilesRequest mediaFiles) {
        return productService.save(product, mediaFiles);
    }

    @GetMapping("/{id}")
    public @ResponseBody ResponseEntity<Product> getById(@PathVariable("id") String id) {
        return productService.getById(id);
    }

    @GetMapping("/card/{id}")
    public @ResponseBody ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(@PathVariable("id") String id) {
        return productService.getProductCardInfoById(id);
    }

    @GetMapping("/{title}")
    public @ResponseBody ResponseEntity<Product> getByTitle(@PathVariable("title") String title) {
        return productService.getByTitle(title);
    }

    @PutMapping
    public @ResponseBody ResponseEntity<HttpStatus> update(@RequestBody Product product) {
        return productService.update(product);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody ResponseEntity<HttpStatus> delete(@PathVariable("id") String id) {
        return productService.delete(id);
    }

}
