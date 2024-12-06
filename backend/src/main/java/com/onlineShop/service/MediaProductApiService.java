package com.onlineShop.service;

import com.onlineShop.dto.product.media.MediaProductRequest;
import com.onlineShop.dto.product.media.MediaProductResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MediaProductApiService<ID, T> extends MediaApiService<ID, T> {

    ResponseEntity<List<MediaProductResponse>> getAllForEntity(ID id);

    ResponseEntity<MediaProductResponse> getById(String id);

    ResponseEntity<MediaProductResponse> getByMediaName(String mediaName);

    ResponseEntity<HttpStatus> update(MediaProductRequest media);

    ResponseEntity<HttpStatus> deleteAll(List<MediaProductRequest> products);

}
