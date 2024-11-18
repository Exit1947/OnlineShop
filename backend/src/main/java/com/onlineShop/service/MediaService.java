package com.onlineShop.service;

import com.onlineShop.models.Product.Media;
import com.onlineShop.models.Product.Product;

import java.util.List;
import java.util.Optional;

public interface MediaService {

    void save(Media media);

    void saveAll(List<Media> mediaList);

    Optional<Media> findById(String id);

    Optional<Media> findByMediaName(String mediaName);

    void update(Media media);

    void delete(String id);

}
