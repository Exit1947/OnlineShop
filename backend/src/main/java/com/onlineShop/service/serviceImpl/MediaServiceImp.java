package com.onlineShop.service.serviceImpl;

import com.onlineShop.models.Product.Media;
import com.onlineShop.repository.MediaRepository;
import com.onlineShop.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MediaServiceImp implements MediaService {

    private final MediaRepository mediaRepository;

    @Autowired
    public MediaServiceImp(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    @Override
    public void save(Media media) {
        if(!mediaRepository.existsByMediaName(media.getMediaName())){
            mediaRepository.save(media);
        }
    }

    @Override
    public void saveAll(List<Media> mediaList) {
        if(!mediaList.isEmpty()){
            for(Media media : mediaList){
                save(media);
            }
        }
    }

    @Override
    public Optional<Media> findById(String id) {
        return mediaRepository.findById(id);
    }

    @Override
    public Optional<Media> findByMediaName(String mediaName) {
        return mediaRepository.findByMediaName(mediaName);
    }

    @Override
    public void update(Media media) {
        Optional<Media> existingMedia = mediaRepository.findByMediaName(media.getMediaName());
        if(existingMedia.isPresent()){
            Media oldMedia = existingMedia.get();
            media.setId(oldMedia.getId());
            mediaRepository.save(media);
        }
    }

    @Override
    public void delete(String id) {
        if(mediaRepository.existsById(id)){
            mediaRepository.deleteById(id);
        }
    }

}
