package com.onlineShop.service.serviceImpl;

import com.onlineShop.dto.media.MediaRequest;
import com.onlineShop.dto.media.MediaResponse;
import com.onlineShop.models.Product.Media.Media;
import com.onlineShop.models.Product.Product;
import com.onlineShop.repository.MediaRepository;
import com.onlineShop.service.MediaService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.*;

@Service
public class MediaServiceImpl implements MediaService {

    private final MediaRepository mediaRepository;
    private final AmazonS3CloudServiceImpl amazonS3CloudService;
    private Map<String, Product> productFileMap;

    @Autowired
    public MediaServiceImpl(MediaRepository mediaRepository, AmazonS3CloudServiceImpl amazonS3CloudService) {
        this.mediaRepository = mediaRepository;
        this.amazonS3CloudService = amazonS3CloudService;
        this.productFileMap = new HashMap<>();
    }

    @Override
    public String createSessionForMedia(Product product) {
        if(productFileMap.entrySet().stream()
                .noneMatch(entry -> entry.getValue().getId().equals(product.getId()))) {
            String sessionId = UUID.randomUUID().toString();
            productFileMap.put(sessionId, product);
            return sessionId;
        }
        return null;
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> save(String sessionId, List<File> mediaFiles) {
        if(productFileMap.containsKey(sessionId)) {
                Product product = productFileMap.get(sessionId);
                for(File file : mediaFiles) {
                    Media media = new Media();
                    String id = UUID.randomUUID().toString();

                    media.setMediaName(id);
                    media.setProduct(product);

                    mediaRepository.save(media);

                    String fileFormat = ".file";
                    int dotIndex = file.getName().lastIndexOf(".");
                    if (dotIndex >= 0) {
                        fileFormat = file.getName().substring(dotIndex + 1);
                    }

                    String newFilePath = file.getParent().concat(id).concat(fileFormat);
                    File newFile = new File(file.getParent(), newFilePath);

                    boolean success = file.renameTo(newFile);

                    if (success) {
                        amazonS3CloudService.store(file);
                    } else {
                        System.out.println("File rename failed.");
                    }

                    file.delete();
                }
            productFileMap.remove(sessionId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<List<MediaResponse>> getAllForProduct(String productId) {
            List<MediaResponse> mediaRequestList = mediaRepository
                    .findAllByProductId(productId)
                    .stream()
                    .map(media -> MediaResponse.builder()
                            .id(media.getId())
                            .mediaUrl(media.getMediaName())
                            .productId(productId)
                            .type(media.getType())
                            .build()).toList();

            mediaRequestList
                    .forEach(media -> media.setMediaUrl(amazonS3CloudService.get(media.getMediaUrl())));
            return new ResponseEntity<>(mediaRequestList, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<MediaResponse> findById(String id) {
        Optional<Media> existingMedia = mediaRepository.findById(id);
        return getMediaResponseEntity(existingMedia);
    }

    @Override
    public ResponseEntity<MediaResponse> findByMediaName(String mediaName) {
        Optional<Media> existingMedia = mediaRepository.findByMediaName(mediaName);
        return getMediaResponseEntity(existingMedia);
    }

    private ResponseEntity<MediaResponse> getMediaResponseEntity(Optional<Media> existingMedia) {
        if(existingMedia.isPresent()){
            Media media = existingMedia.get();
            return new ResponseEntity<>(
                    MediaResponse
                            .builder()
                            .id(media.getId())
                            .mediaUrl(media.getMediaName())
                            .productId(media.getProduct().getId())
                            .type(media.getType())
                            .build(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<HttpStatus> update(MediaRequest media) {
        Optional<Media> existingMedia = mediaRepository.findById(media.getId());
        if(existingMedia.isPresent()){
            String mediaName = media.getMediaUrl().substring(media.getMediaUrl().lastIndexOf("/")+1);
            Media oldMedia = existingMedia.get();

            Media newMedia = Media
                    .builder()
                    .id(oldMedia.getId())
                    .mediaName(mediaName)
                    .product(oldMedia.getProduct())
                    .type(oldMedia.getType())
                    .build();

            mediaRepository.save(newMedia);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<HttpStatus> delete(String id) {
        if(mediaRepository.existsById(id)){
            mediaRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
