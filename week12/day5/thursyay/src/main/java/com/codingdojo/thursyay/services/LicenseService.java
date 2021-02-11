package com.codingdojo.thursyay.services;

import java.util.List;

import com.codingdojo.thursyay.models.License;
import com.codingdojo.thursyay.respositories.LicenseRepository;

import org.springframework.stereotype.Service;

@Service
public class LicenseService {
  private final LicenseRepository licenseRepository;

  public LicenseService(LicenseRepository licenseRepository) {
    this.licenseRepository = licenseRepository;
  }

  // returns all the licenses
  public List<License> allLicenses() {
    return licenseRepository.findAll();
  }

  // createLicense
  public License createLicense(License license) {
    return licenseRepository.save(license);
  }
}
