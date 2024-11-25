package com.onlineShop.dto.productDto;

import com.onlineShop.models.Product.MediaType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    @NotNull(message = "Media type can't be empty")
    private MediaType type;

}
