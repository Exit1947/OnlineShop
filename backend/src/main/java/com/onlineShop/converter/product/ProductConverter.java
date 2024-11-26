package com.onlineShop.converter.product;

import com.onlineShop.dto.product.ProductCardInfoResponse;
import com.onlineShop.dto.product.ProductRequest;
import com.onlineShop.dto.product.ProductResponse;
import com.onlineShop.models.Product.Product;

public class ProductConverter {

    public static Product toProduct(final ProductRequest request){
        return Product.builder()
                .title(request.getTitle())
                .price(request.getPrice())
                .discount(request.getDiscount() > 0)
                .build();
    }

    public static ProductResponse toProductResponse(final Product product, int discount){
        return ProductResponse.builder()
                .id(product.getId())
                .title(product.getTitle())
                .price(product.getPrice())
                .description(product.getDescription())
                .discount(discount)
                .build();
    }

    public static ProductCardInfoResponse toProductCardResponse(final Product product, int discount, String thumbnailImage, int feedbacksCount){
        return ProductCardInfoResponse.builder()
                .id(product.getId())
                .title(product.getTitle())
                .price(product.getPrice())
                .discount(discount)
                .countOfFeedbacks(feedbacksCount)
                .thumbnailImage(thumbnailImage)
                .build();
    }

}
