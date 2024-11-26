package com.onlineShop.converter.users;

import com.onlineShop.dto.auth.RegisterRequest;
import com.onlineShop.models.Users.EndUser;
import com.onlineShop.models.Users.UserEntity;
import com.onlineShop.security.UserPrincipal;

public class AuthConverter {

    public static EndUser toEndUser(final RegisterRequest request){
        EndUser endUser = new EndUser();
        endUser.setEmail(request.getEmail());
        endUser.setFirstName(request.getFirstName());
        endUser.setLastName(request.getLastName());
        endUser.setAvatar(request.getAvatar());
        endUser.setPhoneNumber(request.getPhoneNumber());
        endUser.setCreationDate(request.getCreationDate());

        return endUser;
    }

    public static UserPrincipal personToUserPrincipal(final UserEntity person){
        return UserPrincipal.builder()
                .userId(person.getId())
                .email(person.getEmail())
                .authorities(person.getPrivileges())
                .role(person.getRole())
                .password(person.getPassword())
                .build();
    }

}
