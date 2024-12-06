package com.onlineShop.service.serviceImpl;

import com.onlineShop.models.Product.Media.Media;
import com.onlineShop.models.Product.Product;
import com.onlineShop.repository.MediaRepository;
import com.onlineShop.repository.ProductRepository;
import com.onlineShop.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class MediaServiceImpl implements MediaService<String, Product> {

    private final ProductRepository productRepository;
    private final MediaRepository mediaRepository;
    private final AmazonS3CloudServiceImpl amazonS3CloudService;

    @Autowired
    public MediaServiceImpl(ProductRepository productRepository, MediaRepository mediaRepository, AmazonS3CloudServiceImpl amazonS3CloudService) {
        this.productRepository = productRepository;
        this.mediaRepository = mediaRepository;
        this.amazonS3CloudService = amazonS3CloudService;
    }

    @Override
    @Transactional
    public boolean save(String entityId, MultipartFile mediaFile) {
        Optional<Product> existingProduct = productRepository.findById(entityId);
        if(existingProduct.isPresent()) {
            Media media = new Media();
            media.setMediaName(UUID.randomUUID().toString());
            media.setProduct(existingProduct.get());
            media.setNumber(mediaRepository.getCountByProductId(entityId) + 1);
            mediaRepository.save(media);

            try {
                amazonS3CloudService.store(media.getMediaName(), mediaFile.getBytes());
                return true;
            } catch (IOException ignored) {
                return false;
            }
        }
        return false;
    }

    @Override
    @Transactional
    public boolean initialSave(String entityId, List<MultipartFile> mediaFiles){
        Optional<Product> existingProduct = productRepository.findById(entityId);
        if(existingProduct.isPresent()) {
            Product product = existingProduct.get();

            List<Media> mediaList = getAllForEntity(product.getId());
            if(mediaList != null && !mediaList.isEmpty()) {
                deleteAll(mediaList);
            }

            Map<String, byte[]> storingFiles = new HashMap<>();
            for (int i = 0; i < mediaFiles.size(); i++) {
                Media media = new Media();
                media.setMediaName(UUID.randomUUID().toString());
                media.setProduct(product);
                media.setNumber(i + 1);
                mediaRepository.save(media);

                try {
                    storingFiles.put(media.getMediaName(), mediaFiles.get(i).getBytes());
                } catch (IOException ignored) {
                    return false;
                }
            }

            amazonS3CloudService.store(storingFiles);

            return true;
        }
        return false;
    }

    @Override
    public List<Media> getAllForEntity(String productId) {
        return mediaRepository.findAllByProductId(productId);
    }

    @Override
    public String getUrl(String name) {
        return amazonS3CloudService.get(name);
    }

    @Override
    public Optional<Media> getById(String id) {
        return mediaRepository.findById(id);
    }

    @Override
    public Optional<Media> getByMediaName(String mediaName) {
        return mediaRepository.findByMediaName(mediaName);
    }

    @Override
    @Transactional
    public boolean update(Media newMedia) {
        Optional<Media> existingMedia = mediaRepository.findById(newMedia.getId());
        if(existingMedia.isPresent()){
            String mediaName = newMedia.getMediaName();
            Media media = existingMedia.get();

            media.setMediaName(newMedia.getMediaName());
            media.setProduct(newMedia.getProduct());
            media.setType(media.getType());

            mediaRepository.save(media);

            if(!media.getMediaName().equals(newMedia.getMediaName())) {
                amazonS3CloudService.rename(media.getMediaName(), mediaName);
            }

            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public boolean delete(String id) {
        Optional<Media> existingMedia = mediaRepository.findById(id);
        if(existingMedia.isPresent()) {
            mediaRepository.deleteById(id);

            amazonS3CloudService.delete(existingMedia.get().getMediaName());

            return true;
        }
        return false;
    }

    @Override
    @Transactional
    public boolean deleteAll(List<Media> medias) {
        medias
                .forEach(media -> delete(media.getId()));

        return true;
    }

    @Override
    public boolean existsById(String id) {
        return mediaRepository.existsById(id);
    }

    @Override
    public boolean existsByMediaName(String mediaName) {
        return mediaRepository.existsByMediaName(mediaName);
    }

}
