package com.onlineShop.service;

import com.onlineShop.dto.RegistrationRequest;
import com.onlineShop.models.Users.Role;
import com.onlineShop.models.Users.UserInformation;
import com.onlineShop.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.OffsetDateTime;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void register(RegistrationRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "User with that email already exists");
        }

        UserInformation newUserInformation = UserInformation.builder()
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .name(request.name())
                .role(new Role(1, "ROLE_USER"))
                .phoneNumber("+380")
                .creationDateTime(OffsetDateTime.now())
                .build();

        userRepository.save(newUserInformation);
    }
}
