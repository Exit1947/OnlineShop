package com.onlineShop.service;

import com.onlineShop.dto.media.MediaRequest;
import com.onlineShop.dto.media.MediaResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface MediaApiService<ID, T> {

    ResponseEntity<HttpStatus> save(String entityId, MultipartFile mediaFile);

    ResponseEntity<HttpStatus> initialSave(String entityId, List<MultipartFile> media);

    ResponseEntity<? extends MediaResponse> getById(String id);

    ResponseEntity<? extends MediaResponse> getByMediaName(String mediaName);

    ResponseEntity<List<? extends MediaResponse>> getAllForEntity(ID id);

    <M extends MediaRequest> ResponseEntity<HttpStatus> update(M media);

    ResponseEntity<HttpStatus> deleteAll(List<? extends MediaRequest> products);

    ResponseEntity<HttpStatus> delete(ID id);

    ResponseEntity<HttpStatus> deleteAllForEntity(String productId);

}
