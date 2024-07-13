package com.onlineShop.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public final class LoginResponse {

    private final String accessToken;

    public LoginResponse(final String accessToken) {
        this.accessToken = accessToken;
    }
}
