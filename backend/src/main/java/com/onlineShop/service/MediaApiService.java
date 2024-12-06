package com.onlineShop.service;

import com.onlineShop.dto.product.media.MediaProductRequest;
import com.onlineShop.dto.product.media.MediaProductResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MediaApiService <ID, T> {

    ResponseEntity<HttpStatus> save(String entityId, MultipartFile mediaFile);

    ResponseEntity<HttpStatus> initialSave(String entityId, List<MultipartFile> media);

    ResponseEntity<List<MediaProductResponse>> getAllForEntity(ID id);

    ResponseEntity<MediaProductResponse> getById(String id);

    ResponseEntity<MediaProductResponse> getByMediaName(String mediaName);

    ResponseEntity<HttpStatus> update(MediaProductRequest media);

    ResponseEntity<HttpStatus> delete(ID id);

    ResponseEntity<HttpStatus> deleteAll(List<MediaProductRequest> products);

    ResponseEntity<HttpStatus> deleteAllForEntity(String productId);

}
