package com.onlineShop.converter.users;

import com.onlineShop.dto.RegisterRequest;
import com.onlineShop.models.Users.EndUser;
import com.onlineShop.models.Users.Person;
import com.onlineShop.security.UserPrincipal;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class AuthConverter {
    public EndUser requestToEndUser(RegisterRequest request){
        EndUser endUser = new EndUser();
        endUser.setId(UUID.randomUUID().toString());
        endUser.setEmail(request.getEmail());
        endUser.setFirstName(request.getFirstName());
        endUser.setLastName(request.getLastName());
        endUser.setAvatar(request.getAvatar());
        endUser.setPhoneNumber(request.getPhoneNumber());
        endUser.setCreationDate(request.getCreationDate());

        return endUser;
    }

    public UserPrincipal personToUserPrincipal(Person person){
        return UserPrincipal.builder()
                .userId(person.getId())
                .email(person.getEmail())
                .authorities(person.getPrivileges())
                .role(person.getRole())
                .password(person.getPassword())
                .build();
    }
}
