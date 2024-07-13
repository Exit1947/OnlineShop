package com.onlineShop.repository;

import com.onlineShop.models.Users.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, String> {

    Optional<Person> findByEmail(String email);

    Optional<Person> findById(String id);

    boolean existsByEmail(String email);
}
