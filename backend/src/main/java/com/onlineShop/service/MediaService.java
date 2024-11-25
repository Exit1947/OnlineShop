package com.onlineShop.service;

import com.onlineShop.dto.productDto.MediaRequest;
import com.onlineShop.dto.productDto.MediaResponse;
import com.onlineShop.models.Product.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.File;
import java.util.List;
import java.util.Optional;

public interface MediaService {

    String createSessionForMedia(Product product);

    ResponseEntity<HttpStatus> save(String sessionId, List<File> mediaFiles);

    ResponseEntity<List<MediaResponse>> getAllForProduct(String productId);

    ResponseEntity<MediaResponse> findById(String id);

    ResponseEntity<MediaResponse> findByMediaName(String mediaName);

    ResponseEntity<HttpStatus> update(MediaRequest media);

    ResponseEntity<HttpStatus> delete(String id);

}
