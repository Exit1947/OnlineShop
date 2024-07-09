package com.onlineShop.service;

import com.onlineShop.converter.users.AuthConverter;
import com.onlineShop.dto.LoginRequest;
import com.onlineShop.dto.LoginResponse;
import com.onlineShop.dto.RegisterRequest;
import com.onlineShop.models.Users.EndUser;
import com.onlineShop.preload.PrivilegeRolePreload;
import com.onlineShop.security.JwtIssuer;
import com.onlineShop.security.UserPrincipal;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final JwtIssuer jwtIssuer;
    private final PersonService personService;
    private final AuthenticationManager authenticationManager;
    private final AuthConverter authConverter;
    private final PasswordEncoder passwordEncoder;
    private final PrivilegeRolePreload privilegeRolePreload;

    public ResponseEntity<LoginResponse> attemptLogin(LoginRequest request){
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );


        UserPrincipal user = (UserPrincipal) authentication.getPrincipal();
        return ResponseEntity.ok(LoginResponse
                .builder()
                .accessToken(jwtIssuer.issue(user.getUserId(), user.getEmail(), user.getRole(), user.getAuthorities()))
                .build());
    }

    @Transactional
    public ResponseEntity<HttpStatus> register(RegisterRequest request){
        if(!personService.existsByEmail(request.getEmail())) {
            EndUser endUser = authConverter.requestToEndUser(request);

            endUser.setPassword(passwordEncoder.encode(request.getPassword()));
            endUser.setRole(privilegeRolePreload.getUserRole());
            endUser.setPrivileges(privilegeRolePreload.getBasePrivilegesForRegistration());

            personService.save(endUser);

            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }
}
