package com.onlineShop.dto.product;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CharacteristicDto {

    private int id;

    private int characteristicId;

    @Size(min = 3, max = 20, message = "Name must be between 3 and 20 characters")
    private String name;

    @Size(min = 5, max = 50, message = "Description must be between 5 and 50 characters")
    private String description;

    @NotBlank(message = "Value must not be blank")
    @Size(min = 1, max = 30, message = "Value must be between 1 and 30 characters")
    private String value;

}
