package com.onlineShop.converter.product;

import com.onlineShop.dto.product.ProductRequest;
import com.onlineShop.dto.product.ProductResponse;
import com.onlineShop.models.Product.Product;

import java.util.UUID;

public class ProductConverter {

    public static Product toProduct(final ProductRequest request){
        return Product.builder()
                .id(UUID.randomUUID().toString())
                .title(request.getTitle())
                .price(request.getPrice())
                .discount(request.getDiscount() > 0)
                .build();
    }

    public static ProductResponse toProductResponse(final Product product){
        return ProductResponse
                .builder()
                .id(product.getId())
                .title(product.getTitle())
                .price(product.getPrice())
                .description(product.getDescription())
                .build();
    }

}
