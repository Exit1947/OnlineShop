package com.onlineShop.service;

import com.onlineShop.models.Users.Privilege;
import com.onlineShop.repository.PrivilegeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrivilegeService {

    private final PrivilegeRepository privilegeRepository;

    @Autowired
    public PrivilegeService(final PrivilegeRepository privilegeRepository) {
        this.privilegeRepository = privilegeRepository;
    }

    public Optional<Privilege> findById(final int id){
        return privilegeRepository.findById(id);
    }

    public Optional<Privilege> findByText(final String textPrivilege) {
        return privilegeRepository.findByTextPrivilege(textPrivilege);
    }

    public List<Privilege> getAll(){
        return privilegeRepository.findAll();
    }
}
