package com.onlineShop.dto.cart;

import com.onlineShop.dto.cart.productDto.ProductResponse;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CartResponse {

    private String id;

    private double totalPrice;

    private List<ProductResponse> productList;

}
