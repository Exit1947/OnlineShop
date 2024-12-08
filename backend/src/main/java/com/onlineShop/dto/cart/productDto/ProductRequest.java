package com.onlineShop.dto.cart.productDto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {

    @NotBlank(message = "Product id can't be blank.")
    private String productId;

    @Positive(message = "Quantity must be more than zero.")
    private int quantity;

}
