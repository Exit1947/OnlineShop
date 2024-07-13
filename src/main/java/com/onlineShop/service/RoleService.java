package com.onlineShop.service;

import com.onlineShop.models.Users.Role;
import com.onlineShop.repository.RoleRepository;
import com.onlineShop.security.RoleType;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleService(final RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public Optional<Role> findByType(final RoleType type) {
        return roleRepository.findByType(type);
    }

    public Optional<Role> findById(final int id) {
        return roleRepository.findById(id);
    }

    public List<Role> getAll() {
        return roleRepository.findAll();
    }
}
