package com.onlineShop.dto.productDto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Builder
public class ProductRequest {

    private String id;

    private String title;

    private int price;

    private int discount;

    private String nameCategory;

    private Date dateFrom;

    private Date dateTo;

    private List<CharacteristicDto> characteristicValuesList;

}
