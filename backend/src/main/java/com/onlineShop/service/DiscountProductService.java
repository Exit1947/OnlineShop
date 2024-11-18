package com.onlineShop.service;

import com.onlineShop.models.Product.DiscountProduct;
import com.onlineShop.models.Product.Media;

import java.util.List;
import java.util.Optional;

public interface DiscountProductService {

    void save(DiscountProduct discountProduct);

    Optional<DiscountProduct> findById(String id);

    Optional<DiscountProduct> findByProductId(String mediaName);

    void update(DiscountProduct discountProduct);

    void delete(String id);

    void deleteAll(List<DiscountProduct> productList);

}
