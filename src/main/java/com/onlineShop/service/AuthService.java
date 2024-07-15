package com.onlineShop.service;

import com.onlineShop.converter.users.AuthConverter;
import com.onlineShop.dto.LoginRequest;
import com.onlineShop.dto.LoginResponse;
import com.onlineShop.dto.RegisterRequest;
import com.onlineShop.models.Users.EndUser;
import com.onlineShop.preload.RolePrivilegePreload;
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

    private final RolePrivilegePreload rolePrivilegePreload;
    private final PersonService personService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtIssuer jwtIssuer;

    @Transactional
    public ResponseEntity<HttpStatus> register(final RegisterRequest request) {
        if (!personService.existsByEmail(request.getEmail())) {
            EndUser endUser = AuthConverter.toEndUser(request);

            endUser.setPassword(passwordEncoder.encode(request.getPassword()));
            endUser.setRole(rolePrivilegePreload.END_USER);
            endUser.setPrivileges(rolePrivilegePreload.baseRegisterPrivilege);

            personService.save(endUser);

            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    public ResponseEntity<LoginResponse> login(final LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        UserPrincipal user = (UserPrincipal) authentication.getPrincipal();
        String issue = jwtIssuer.issue(user.getUserId(), user.getEmail(), user.getRole(), user.getAuthorities());
        return ResponseEntity.ok(new LoginResponse(issue));
    }

}
