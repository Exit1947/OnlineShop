package com.onlineShop.repository;

import com.onlineShop.models.Users.Privilege;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PrivilegeRepository extends JpaRepository<Privilege, Integer> {
    Optional<Privilege> findById(int id);
    Optional<Privilege> findByTextPrivilege(String textPrivilege);
    List<Privilege> findAll();
}
