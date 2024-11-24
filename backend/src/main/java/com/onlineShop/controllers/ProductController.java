package com.onlineShop.controllers;

import com.onlineShop.dto.ProductCardInfoResponse;
import com.onlineShop.dto.productDto.ProductRequest;
import com.onlineShop.dto.productDto.ProductResponse;
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

    @PostMapping("/save")
    public @ResponseBody ResponseEntity<String> save(@RequestBody ProductRequest product) {
        if(product!=null) {
            return productService.save(product);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/id={id}")
    public @ResponseBody ResponseEntity<ProductResponse> getById(@PathVariable("id") String id) {
        return productService.getById(id);
    }

    @GetMapping("/card/id={id}")
    public @ResponseBody ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(@PathVariable("id") String id) {
        return productService.getProductCardInfoById(id);
    }

    @GetMapping("/title={title}")
    public @ResponseBody ResponseEntity<ProductResponse> getByTitle(@PathVariable("title") String title) {
        return productService.getByTitle(title);
    }

    @GetMapping("/card/title={title}")
    public @ResponseBody ResponseEntity<ProductCardInfoResponse> getProductCardInfoByTitle(@PathVariable("title") String title) {
        return productService.getProductCardInfoByTitle(title);
    }

    @PutMapping("/update")
    public @ResponseBody ResponseEntity<HttpStatus> update(@RequestBody ProductRequest product) {
        if(product!=null) {
            return productService.update(product);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/delete/{id}")
    public @ResponseBody ResponseEntity<HttpStatus> delete(@PathVariable("id") String id) {
        return productService.delete(id);
    }

}
