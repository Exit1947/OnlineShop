package com.onlineShop.security;

import com.onlineShop.converter.users.AuthConverter;
import com.onlineShop.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {
    private final PersonService personService;
    private final AuthConverter authConverter;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var person = personService.findByEmail(username).orElseThrow();
        return authConverter.personToUserPrincipal(person);
    }
}
