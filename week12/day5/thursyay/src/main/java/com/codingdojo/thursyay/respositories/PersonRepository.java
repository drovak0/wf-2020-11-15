package com.codingdojo.thursyay.respositories;

import java.util.List;

import com.codingdojo.thursyay.models.Person;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {
  // this method retrieves all the persons from the database
  List<Person> findAll();
}