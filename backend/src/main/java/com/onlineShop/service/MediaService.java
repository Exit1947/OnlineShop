package com.onlineShop.service;

import com.onlineShop.models.Product.Media.Media;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface MediaService<ID, T> {

    boolean save(ID entityId, MultipartFile mediaFile);

    boolean initialSave(ID entityId, List<MultipartFile> mediaFiles);

    List<Media> getAllForEntity(ID id);

    String getUrl(String name);

    Optional<Media> getById(String id);

    Optional<Media> getByMediaName(String mediaName);

    boolean update(Media newMedia);

    boolean delete(ID id);

    boolean deleteAll(List<Media> medias);

    boolean existsById(ID id);

    boolean existsByMediaName(String mediaName);

}
