package com.onlineShop.service;

import com.onlineShop.models.Users.EndUserEntities.cart.Cart;

import java.util.Optional;

public interface CartService {

    void save(Cart cart);

    Optional<Cart> getById(long id);

    Optional<Cart> getByUserId(String id);

    void deleteById(long id);

    boolean existsByUserId(String id);

}
