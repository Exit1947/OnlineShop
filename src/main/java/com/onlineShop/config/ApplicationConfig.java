package com.onlineShop.config;

import com.onlineShop.models.Users.Privilege;
import com.onlineShop.models.Users.Role;
import com.onlineShop.repository.PrivilegeRepository;
import com.onlineShop.service.PrivilegeService;
import com.onlineShop.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final RoleService roleService;
    private final PrivilegeService privilegeService;

    @Bean
    public List<Role> roles(){
        return roleService.getAll();
    }

    @Bean
    public List<Privilege> privileges(){
        return privilegeService.getAll();
    }

    //TODO: in future config hashMap of <Category, SubCategory> for categories and just List for categories for save time to request to db
}
