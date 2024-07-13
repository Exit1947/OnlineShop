package com.onlineShop.service;

import com.onlineShop.models.Users.Person;
import com.onlineShop.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
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

    public Optional<Person> findById(final String id) {
        return personRepository.findById(id);
    }

    public Optional<Person> findByEmail(final String email) {
        return personRepository.findByEmail(email);
    }

    public void save(final Person person) {
        personRepository.save(person);
    }

    public boolean existsByEmail(String email) {
        return personRepository.existsByEmail(email);
    }
}
