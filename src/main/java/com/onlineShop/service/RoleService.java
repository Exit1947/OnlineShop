package com.onlineShop.service;

import com.onlineShop.models.Users.Role;
import com.onlineShop.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository roleRepository;

    public Optional<Role> findByType(String type){return roleRepository.findByType(type);}
    public Optional<Role> findById(int id){
        return roleRepository.findById(id);
    }
    public List<Role> getAll(){
        return roleRepository.findAll();
    }
}
