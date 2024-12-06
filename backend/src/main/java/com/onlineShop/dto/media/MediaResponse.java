package com.onlineShop.dto.media;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MediaResponse {

    private String id;

    @NotBlank(message = "MediaUrl can't be empty")
    private String mediaUrl;

}
