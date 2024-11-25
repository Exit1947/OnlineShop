package com.onlineShop.controllers;

import com.onlineShop.dto.product.ProductCardInfoResponse;
import com.onlineShop.dto.product.ProductRequest;
import com.onlineShop.dto.product.ProductResponse;
import com.onlineShop.service.ProductService;
import jakarta.validation.Valid;
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
    public @ResponseBody ResponseEntity<String> save(@RequestBody @Valid ProductRequest product) {
        return productService.save(product);
    }

    @GetMapping("/id={id}")
    public @ResponseBody ResponseEntity<ProductResponse> getById(@PathVariable("id") String id) {
        if(id!=null && !id.isEmpty()) {
            return productService.getById(id);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/card/id={id}")
    public @ResponseBody ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(@PathVariable("id") String id) {
        if(id!=null && !id.isEmpty()) {
            return productService.getProductCardInfoById(id);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/title={title}")
    public @ResponseBody ResponseEntity<ProductResponse> getByTitle(@PathVariable("title") String title) {
        if(title!=null && !title.isEmpty()) {
            return productService.getByTitle(title);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/card/title={title}")
    public @ResponseBody ResponseEntity<ProductCardInfoResponse> getProductCardInfoByTitle(@PathVariable("title") String title) {
        if(title!=null && !title.isEmpty()) {
            return productService.getProductCardInfoByTitle(title);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/update")
    public @ResponseBody ResponseEntity<HttpStatus> update(@RequestBody @Valid ProductRequest product) {
        return productService.update(product);
    }

    @DeleteMapping("/delete/id={id}")
    public @ResponseBody ResponseEntity<HttpStatus> delete(@PathVariable("id") String id) {
        if(id!=null && !id.isEmpty()) {
            return productService.delete(id);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
