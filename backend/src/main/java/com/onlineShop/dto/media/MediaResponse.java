package com.onlineShop.dto.media;

import com.onlineShop.models.Product.Media.MediaType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MediaResponse {

    private String id;

    @NotBlank(message = "MediaUrl can't be empty")
    private String mediaUrl;

    @NotBlank(message = "Product id can't be empty")
    private String productId;

    @NotNull(message = "Media type can't be empty")
    private MediaType type;

}
