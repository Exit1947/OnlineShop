package com.onlineShop.dto.productDto;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MediaRequest {

    private String id;

    @NotBlank(message = "MediaUrl can't be empty")
    private String mediaUrl;

}