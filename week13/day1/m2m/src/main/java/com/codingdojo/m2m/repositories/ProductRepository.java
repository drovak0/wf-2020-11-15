package com.codingdojo.m2m.repositories;

import java.util.List;

import com.codingdojo.m2m.models.Product;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
  // this method retrieves all the persons from the database
  List<Product> findAll();
}