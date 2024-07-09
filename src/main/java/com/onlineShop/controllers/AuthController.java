package com.onlineShop.controllers;

import com.onlineShop.dto.LoginRequest;
import com.onlineShop.dto.LoginResponse;
import com.onlineShop.dto.RegisterRequest;
import com.onlineShop.security.UserPrincipal;
import com.onlineShop.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/login")
    public @ResponseBody ResponseEntity<LoginResponse> login(@Valid @RequestBody  LoginRequest request){return authService.attemptLogin(request);}

    @PostMapping("/register")
    public ResponseEntity<HttpStatus> register(@Valid @RequestBody RegisterRequest request){return authService.register(request);}
}
