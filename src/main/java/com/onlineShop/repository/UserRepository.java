package com.onlineShop.repository;

import com.onlineShop.models.Users.UserInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserInformation, Integer> {

    Optional<UserInformation> findByEmail(String email);

    boolean existsByEmail(String email);
}
