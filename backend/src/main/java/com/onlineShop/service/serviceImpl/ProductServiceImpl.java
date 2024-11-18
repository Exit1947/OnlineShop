package com.onlineShop.service.serviceImpl;

import com.onlineShop.models.Product.Product;
import com.onlineShop.repository.ProductRepository;
import com.onlineShop.service.ProductService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(final ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> add(final Product product) {
        Optional<Product> existingProduct = productRepository.findByTitle(product.getTitle());
        if(existingProduct.isEmpty()) {
            product.setId(UUID.randomUUID().toString());
            productRepository.save(product);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @Override
    public ResponseEntity<Product> getById(String id) {
        return ResponseEntity.of(productRepository.findById(id));
    }

    @Override
    public ResponseEntity<Product> getByTitle(String title) {
        return ResponseEntity.of(productRepository.findByTitle(title));
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
