package com.onlineShop.service;

import com.onlineShop.models.Users.Person;
import com.onlineShop.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonService {
    private final PersonRepository personRepository;
    public Optional<Person> findById(String id){
        return personRepository.findById(id);
    }

    public Optional<Person> findByEmail(String email){
        return personRepository.findByEmail(email);
    }

    public void save(Person person){
        personRepository.save(person);
    }
    public boolean existsByEmail(String email){ return personRepository.existsByEmail(email);}
}
