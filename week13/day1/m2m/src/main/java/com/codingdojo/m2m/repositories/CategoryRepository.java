package com.codingdojo.m2m.repositories;

import java.util.List;

import com.codingdojo.m2m.models.Category;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
  // this method retrieves all the persons from the database
  List<Category> findAll();
}