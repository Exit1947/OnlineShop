package com.onlineShop.service.serviceImpl;

import com.onlineShop.converter.media.MediaConverter;
import com.onlineShop.dto.product.media.MediaProductRequest;
import com.onlineShop.dto.product.media.MediaProductResponse;
import com.onlineShop.models.Product.Media.Media;
import com.onlineShop.models.Product.Product;
import com.onlineShop.service.MediaProductApiService;
import com.onlineShop.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
public class MediaProductApiServiceImpl implements MediaProductApiService<String, Product> {

    private final MediaService<String, Product> mediaService;

    @Autowired
    public MediaProductApiServiceImpl(MediaService<String, Product> mediaService) {
        this.mediaService = mediaService;
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> save(String entityId, MultipartFile mediaFile) {
        if(mediaService.save(entityId, mediaFile)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<HttpStatus> initialSave(String entityId, List<MultipartFile> media) {
        if(mediaService.initialSave(entityId, media)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<List<MediaProductResponse>> getAllForEntity(String productId) {
        List<MediaProductResponse> mediaProductResponseList = mediaService.getAllForEntity(productId).stream()
                .map(MediaConverter::toMediaProductResponse)
                .toList();

        mediaProductResponseList
                .forEach(media -> media.setMediaUrl(media.getMediaUrl()));

        if(mediaProductResponseList != null){
            return new ResponseEntity<>(mediaProductResponseList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<MediaProductResponse> getById(String id) {
        Optional<Media> media = mediaService.getById(id);
        return media.map(value -> new ResponseEntity<>(MediaConverter.toMediaProductResponse(value), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @Override
    public ResponseEntity<MediaProductResponse> getByMediaName(String mediaName) {
        Optional<Media> media = mediaService.getByMediaName(mediaName);
        return media.map(value -> new ResponseEntity<>(MediaConverter.toMediaProductResponse(value), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.BAD_REQUEST));
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> update(MediaProductRequest media) {
        if(mediaService.update(MediaConverter.toMedia(media))){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<HttpStatus> delete(String idProduct) {
        if(mediaService.delete(idProduct)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> deleteAll(List<MediaProductRequest> products) {
        if(mediaService.deleteAll(
                products.stream().map(MediaConverter::toMedia).toList())){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> deleteAllForEntity(String productId) {
        List<Media> mediaProductResponseList = mediaService.getAllForEntity(productId);
        if(mediaProductResponseList != null){
            mediaService.deleteAll(mediaProductResponseList);

            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
