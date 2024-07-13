package com.onlineShop.security;

import com.onlineShop.converter.users.AuthConverter;
import com.onlineShop.models.Users.Person;
import com.onlineShop.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomUserDetailService implements UserDetailsService {

    private final PersonService personService;

    @Autowired
    public CustomUserDetailService(PersonService personService) {
        this.personService = personService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Person person = personService.findByEmail(username).orElseThrow();
        return AuthConverter.personToUserPrincipal(person);
    }
}
