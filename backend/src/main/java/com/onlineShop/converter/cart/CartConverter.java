package com.onlineShop.converter.cart;

import com.onlineShop.dto.cart.CartRequest;
import com.onlineShop.dto.cart.CartResponse;
import com.onlineShop.dto.cart.productDto.ProductRequest;
import com.onlineShop.dto.cart.productDto.ProductResponse;
import com.onlineShop.models.Product.Product;
import com.onlineShop.models.Users.EndUserEntities.cart.Cart;
import com.onlineShop.models.Users.EndUserEntities.cart.Item;

public class CartConverter {

    public static CartResponse toCartResponse(Cart cart) {
        return CartResponse.builder()
                .id(cart.getId())
                .productList(cart.getItems().stream().map(CartConverter::toProductResponse).toList())
                .totalPrice(cart.getItems().stream().mapToDouble(item -> item.getProduct().getPrice()).sum())
                .build();
    }

    public static Cart toCart(CartRequest cartRequest) {
        return Cart.builder()
                .id(cartRequest.getId())
                .items(cartRequest.getProductList().stream().map(CartConverter::toItem).toList())
                .build();
    }

    public static ProductResponse toProductResponse(Item item) {
        return ProductResponse.builder()
                .productId(item.getProduct().getId())
                .title(item.getProduct().getTitle())
                .price(item.getProduct().getPrice())
                .available(true)
                .quantity(item.getCountOfProducts())
                .thumbnailImageUrl("-")
                .build();
    }

    public static Item toItem(ProductRequest productRequest) {
        Product product = new Product();
        product.setId(productRequest.getProductId());

        return Item.builder()
                .product(product)
                .countOfProducts(productRequest.getQuantity())
                .build();
    }

}
