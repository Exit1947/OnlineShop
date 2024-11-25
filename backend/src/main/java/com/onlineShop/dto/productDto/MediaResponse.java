package com.onlineShop.dto.productDto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MediaResponse {

    private String id;

    private String mediaUrl;

}