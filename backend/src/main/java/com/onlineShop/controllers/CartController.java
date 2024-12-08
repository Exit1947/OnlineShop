package com.onlineShop.controllers;

import com.onlineShop.dto.cart.CartRequest;
import com.onlineShop.dto.cart.CartResponse;
import com.onlineShop.dto.cart.productDto.ProductRequest;
import com.onlineShop.security.JwtDecoder;
import com.onlineShop.security.JwtToPrincipalConverter;
import com.onlineShop.service.CartApiService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    private final CartApiService cartApiService;
    private final JwtDecoder jwtDecoder;

    @Autowired
    public CartController(CartApiService cartApiService, JwtDecoder jwtDecoder) {
        this.cartApiService = cartApiService;
        this.jwtDecoder = jwtDecoder;
    }

    @GetMapping("/me")
    public ResponseEntity<CartResponse> getSelfCartForEndUser(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        String requestEndUserId;
        try {
            requestEndUserId = JwtToPrincipalConverter.convert(jwtDecoder.decode(authorizationHeader.substring(7))).getUserId();
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return cartApiService.getCartForEndUser(requestEndUserId);
    }

    @GetMapping("/end-user-id={endUserId}")
    public ResponseEntity<CartResponse> getCartForEndUser(@PathVariable("endUserId") String endUserId) {
        if(endUserId != null && !endUserId.isEmpty()){
            return cartApiService.getCartForEndUser(endUserId);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/cart-id={cartId}")
    public ResponseEntity<CartResponse> getCart(@PathVariable("cartId") String cartId){
        if(cartId != null && !cartId.isEmpty()){
            return cartApiService.getCart(cartId);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/cart-id={cartId}")
    public ResponseEntity<HttpStatus> addCartItem(@PathVariable("cartId") String cartId, @RequestBody @Valid ProductRequest productRequest){
        if(cartId != null && !cartId.isEmpty()){
            return cartApiService.addCartItem(cartId, productRequest);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/cart-id={cartId}")
    public ResponseEntity<HttpStatus> removeCartItem(@PathVariable("cartId") String cartId, @RequestBody @Valid ProductRequest productRequest){
        if(cartId != null && !cartId.isEmpty()){
            return cartApiService.removeCartItem(cartId, productRequest);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/cart")
    public ResponseEntity<HttpStatus> updateCart(@RequestBody @Valid CartRequest cartRequest){
        return cartApiService.updateCart(cartRequest);
    }

    @DeleteMapping("/cart/cart-id={cartId}")
    public ResponseEntity<HttpStatus> removeCart(@PathVariable("cartId") String cartId){
        if(cartId != null && !cartId.isEmpty()){
            return cartApiService.removeCart(cartId);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
