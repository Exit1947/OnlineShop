package com.onlineShop.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MediaApiService<ID, T> {

    ResponseEntity<HttpStatus> save(String entityId, MultipartFile mediaFile);

    ResponseEntity<HttpStatus> initialSave(String entityId, List<MultipartFile> media);

    ResponseEntity<HttpStatus> delete(ID id);

    ResponseEntity<HttpStatus> deleteAllForEntity(String productId);

}
