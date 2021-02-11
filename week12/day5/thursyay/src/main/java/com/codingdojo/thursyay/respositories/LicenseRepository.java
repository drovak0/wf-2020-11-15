package com.codingdojo.thursyay.respositories;

import java.util.List;

import com.codingdojo.thursyay.models.License;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LicenseRepository extends CrudRepository<License, Long> {
  // this method retrieves all the persons from the database
  List<License> findAll();
}