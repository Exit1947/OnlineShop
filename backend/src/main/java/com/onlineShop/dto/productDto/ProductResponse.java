package com.onlineShop.dto.productDto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class ProductResponse {

    private String id;

    private String title;

    private int price;

    private int discount;

    private List<CharacteristicDto> characteristicValuesList;

    private List<MediaResponse> mediaList;

}
