package com.onlineShop.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.File;

@Getter
@Setter
@Builder
public class ProductCardInfoResponse {

    private String id;

    private String title;

    private boolean discount;

    private double price;

    private File thumbnailImage;

}
