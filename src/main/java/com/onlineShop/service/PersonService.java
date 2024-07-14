package com.onlineShop.service;

import com.onlineShop.models.Users.UserEntity;
import com.onlineShop.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(final PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Optional<UserEntity> findById(final String id) {
        return personRepository.findById(id);
    }

    public Optional<UserEntity> findByEmail(final String email) {
        return personRepository.findByEmail(email);
    }

    public void save(final UserEntity userEntity) {
        personRepository.save(userEntity);
    }

    public boolean existsByEmail(String email) {
        return personRepository.existsByEmail(email);
    }

}
