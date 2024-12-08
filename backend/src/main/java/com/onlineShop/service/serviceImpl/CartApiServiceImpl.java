package com.onlineShop.service.serviceImpl;

import com.onlineShop.converter.cart.CartConverter;
import com.onlineShop.dto.cart.CartRequest;
import com.onlineShop.dto.cart.CartResponse;
import com.onlineShop.dto.cart.productDto.ProductRequest;
import com.onlineShop.models.Product.Product;
import com.onlineShop.models.Users.EndUser;
import com.onlineShop.models.Users.EndUserEntities.cart.Cart;
import com.onlineShop.models.Users.EndUserEntities.cart.Item;
import com.onlineShop.repository.EndUserRepository;
import com.onlineShop.repository.ProductRepository;
import com.onlineShop.service.CartApiService;
import com.onlineShop.service.CartService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class CartApiServiceImpl implements CartApiService {

    private final CartService cartService;
    private final EndUserRepository endUserRepository;
    private final ProductRepository productRepository;

    @Autowired
    public CartApiServiceImpl(CartService cartService, EndUserRepository endUserRepository, ProductRepository productRepository) {
        this.cartService = cartService;
        this.endUserRepository = endUserRepository;
        this.productRepository = productRepository;
    }

    @Override
    public ResponseEntity<CartResponse> getCartForEndUser(String endUserId) {
        Optional<EndUser> existingEndUser = endUserRepository.findById(endUserId);
        if(existingEndUser.isPresent()) {
            EndUser endUser = existingEndUser.get();

            if(endUser.getCart()!=null) {
                return new ResponseEntity<>(CartConverter.toCartResponse(endUser.getCart()), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<CartResponse> getCart(String cartId) {
        Optional<Cart> existingCart = cartService.getById(cartId);
        return existingCart.map(cart -> new ResponseEntity<>(CartConverter.toCartResponse(cart), HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> addCartItem(String userId, ProductRequest productRequest) {
        Optional<EndUser> existingEndUser = endUserRepository.findById(userId);
        if(existingEndUser.isPresent()) {
            EndUser endUser = existingEndUser.get();

            if(endUser.getCart()!=null) {
                Cart cart = endUser.getCart();
                Optional<Item> existingItem = cartService.existItemInCart(cart, productRequest.getProductId());
                if (existingItem.isPresent()) {
                    Item item = existingItem.get();
                    int indexOfItem = cart.getItems().indexOf(item);
                    item.setCountOfProducts(productRequest.getQuantity());

                    cart.getItems().set(indexOfItem, item);

                    cartService.save(cart);

                    return new ResponseEntity<>(HttpStatus.OK);
                }

                Optional<Product> existingProduct = productRepository.findById(productRequest.getProductId());
                if (existingProduct.isPresent()) {
                    Item requestItem = CartConverter.toItem(productRequest);
                    cart.getItems().add(requestItem);
                    cartService.save(cart);

                    return new ResponseEntity<>(HttpStatus.OK);
                }
            }
            else {
                Cart cart = new Cart();
                cart.getItems().add(CartConverter.toItem(productRequest));
                cart.setEndUser(endUser);
                checkItemListAndSaveCart(cart);

                return new ResponseEntity<>(HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> removeCartItem(String cartId, ProductRequest productRequest) {
        Optional<Cart> existingCart = cartService.getById(cartId);
        if(existingCart.isPresent()) {
            Cart cart = existingCart.get();
            Optional<Item> existingItem = cartService.existItemInCart(cart, productRequest.getProductId());

            if (existingItem.isPresent()) {
                cartService.deleteItem(cart, existingItem.get());
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> updateCart(CartRequest cartRequest) {
        Optional<EndUser> endUser = endUserRepository.findById(cartRequest.getEndUserId());
        if(endUser.isPresent()) {
            if (cartService.existsByUserId(cartRequest.getEndUserId())) {
                Cart updateCart = CartConverter.toCart(cartRequest);
                checkItemListAndSaveCart(updateCart);
                return new ResponseEntity<>(HttpStatus.OK);
            }

            Cart createCart = CartConverter.toCart(cartRequest);
            createCart.setEndUser(endUser.get());
            checkItemListAndSaveCart(createCart);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> removeCart(String cartId) {
        Optional<Cart> existingCart = cartService.getById(cartId);
        if(existingCart.isPresent()) {
            cartService.deleteById(cartId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private void checkItemListAndSaveCart(Cart cart){
        List<Item> items = cart.getItems()
                .stream()
                .filter(item -> productRepository.existsById(item.getProduct().getId()))
                .toList();

        if(items!=null){
            cart.setItems(items);
        }

        cartService.save(cart);
    }
}
