package com.codingdojo.thursyay.controllers;

import java.util.Date;
import java.util.List;

import com.codingdojo.thursyay.models.License;
import com.codingdojo.thursyay.models.Person;
import com.codingdojo.thursyay.services.LicenseService;
import com.codingdojo.thursyay.services.PersonService;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonsApi {
  private final PersonService personService;
  private final LicenseService licenseService;

  public PersonsApi(PersonService personService, LicenseService licenseService) {
    this.personService = personService;
    this.licenseService = licenseService;
  }

  @RequestMapping("/api/persons")
  public List<Person> index() {
    return personService.allPersons();
  }

  @RequestMapping(
    value = "/api/persons",
    method = RequestMethod.POST
  )
  public Person create(
    @RequestParam(value = "firstName") String firstName,
    @RequestParam(value = "lastName") String lastName
  ) {
    Person person = new Person(firstName ,lastName);
    System.out.println("person: " + person.toString());
    return personService.createPerson(person);
  }


  @RequestMapping(
    value = "/api/licenses",
    method = RequestMethod.POST
  )
  public License createLicense(
    @RequestParam(value = "number") String number,
    @RequestParam(value = "expirationDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date expirationDate,
    @RequestParam(value = "state") String state,
    @RequestParam(value = "personId") Long personId
  ) {

    // get the Person
    Person person = personService.findPerson(personId);
    License license = new License(number, expirationDate, state, person);
    System.out.println("license: " + license.toString());
    return licenseService.createLicense(license);
  }

  // @RequestMapping("/api/books/{id}")
  // public Book show(@PathVariable("id") Long id) {
  //   // Book book = bookService.findBook(id);
  //   // return book;
  // }
}