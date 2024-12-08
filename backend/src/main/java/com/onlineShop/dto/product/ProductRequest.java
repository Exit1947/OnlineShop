package com.onlineShop.dto.product;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
public class ProductRequest {

    private String id;

    @NotBlank(message = "Title of product can't be empty")
    @Length(min = 3, max = 400, message = "Product title must be between 3 and 100 characters")
    private String title;

    @Positive(message = "Price must be a positive number")
    private double price;

    @PositiveOrZero(message = "Discount must be a positive number or zero.")
    private int discount;

    @NotBlank(message = "Category name can't be empty")
    @Length(min = 3, max = 150)
    private String nameCategory;

    private Date dateFrom;

    private Date dateTo;

    private List<CharacteristicDto> characteristicValuesList;

    public boolean isDiscount(){
        return discount > 0;
    }

}
