package com.onlineShop.service;

import com.onlineShop.models.Users.Privilege;
import com.onlineShop.repository.PrivilegeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PrivilegeService {
    private final PrivilegeRepository privilegeRepository;
    public Optional<Privilege> findById(int id){
        return privilegeRepository.findById(id);
    }
    public Optional<Privilege> findByText(String textPrivilege){return privilegeRepository.findByTextPrivilege(textPrivilege);}
    public List<Privilege> getAll(){
        return privilegeRepository.findAll();
    }
}
