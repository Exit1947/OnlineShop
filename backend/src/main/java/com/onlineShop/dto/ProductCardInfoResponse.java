package com.onlineShop.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ProductCardInfoResponse {

    private String id;

    private String title;

    private double discount;

    private int countOfFeedbacks;

    private double price;

    private String thumbnailImage;

}
