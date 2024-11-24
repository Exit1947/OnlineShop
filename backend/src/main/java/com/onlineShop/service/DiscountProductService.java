package com.onlineShop.service;

import com.onlineShop.models.Product.DiscountProduct;

import java.util.List;
import java.util.Optional;

public interface DiscountProductService {

    void save(DiscountProduct discountProduct);

    Optional<DiscountProduct> findById(long id);

    Optional<DiscountProduct> findByProductId(String mediaName);

    void update(DiscountProduct discountProduct);

    void delete(long id);

    void deleteAll(List<DiscountProduct> productList);

}
