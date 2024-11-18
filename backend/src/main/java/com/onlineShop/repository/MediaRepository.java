package com.onlineShop.repository;

import com.onlineShop.models.Product.Media;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MediaRepository extends JpaRepository<Media, String> {

    boolean existsByMediaName(String mediaName);

    Optional<Media> findByMediaName(String mediaName);

    void deleteById(String id);

}
