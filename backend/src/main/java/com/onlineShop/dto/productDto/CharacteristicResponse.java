package com.onlineShop.dto.productDto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CharacteristicResponse {

    private int id;

    private int characteristicId;

    private String name;

    private String description;

    private String value;

}
