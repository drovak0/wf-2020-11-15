package com.codingdojo.thursyay.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.codingdojo.thursyay.models.Person;
import com.codingdojo.thursyay.respositories.PersonRepository;

import org.springframework.stereotype.Service;

@Service
public class PersonService {
  // adding the book repository as a dependency
  private final PersonRepository personRepository;

  public PersonService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  // returns all the persons
  public List<Person> allPersons() {
    List<Person> list = new ArrayList<>();
    personRepository.findAll().forEach(e -> list.add(e));
    return list;
  }

  public Person createPerson(Person person) {
    return personRepository.save(person);
  }

  public Person findPerson(Long personId) {
    Optional<Person> optionalPerson = personRepository.findById(personId);
    if (optionalPerson.isPresent()) {
      return optionalPerson.get();
    } else {
      return null;
    }
  }
}

// controller -> service -> repository -> models