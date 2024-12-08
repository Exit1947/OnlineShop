package com.onlineShop.service;

import com.onlineShop.dto.cart.CartRequest;
import com.onlineShop.dto.cart.CartResponse;
import com.onlineShop.dto.cart.productDto.ProductRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public interface CartApiService {

    ResponseEntity<CartResponse> getCartForEndUser(String endUserId);

    ResponseEntity<CartResponse> getCart(String cartId);

    ResponseEntity<HttpStatus> addCartItem(String cartId, ProductRequest productRequest);

    ResponseEntity<HttpStatus> removeCartItem(String cartId, ProductRequest productRequest);

    ResponseEntity<HttpStatus> updateCart(CartRequest cartRequest);

    ResponseEntity<HttpStatus> removeCart(String cartId);

}
