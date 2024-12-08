package com.onlineShop.service.serviceImpl;

import com.onlineShop.models.Users.EndUserEntities.cart.Cart;
import com.onlineShop.repository.CartRepository;
import com.onlineShop.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;

    @Autowired
    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public void save(final Cart cart) {
        cartRepository.save(cart);
    }

    @Override
    public Optional<Cart> getById(long id) {
        return cartRepository.findById(id);
    }

    @Override
    public Optional<Cart> getByUserId(String userId) {
        return cartRepository.getCartByEndUserId(userId);
    }

    @Override
    public void deleteById(long id) {
        cartRepository.deleteById(id);
    }

    @Override
    public boolean existsByUserId(String userId) {
        return cartRepository.existsByEndUserId(userId);
    }


}
