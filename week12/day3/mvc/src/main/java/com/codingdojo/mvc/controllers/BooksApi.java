package com.codingdojo.mvc.controllers;

import java.util.List;

import com.codingdojo.mvc.models.Book;
import com.codingdojo.mvc.services.BookService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BooksApi {
  private final BookService bookService;

  public BooksApi(BookService bookService) {
    this.bookService = bookService;
  }

  @RequestMapping("/api/books")
  public List<Book> index() {
    return bookService.allBooks();
  }

  @RequestMapping(value = "/api/books", method = RequestMethod.POST)
  public Book create(
    @RequestParam(value = "title") String title,
    @RequestParam(value = "description") String desc,
    @RequestParam(value = "language") String lang,
    @RequestParam(value = "pages") Integer numOfPages
  ) {
    Book book = new Book(title, desc, lang, numOfPages);
    System.out.println("book: " + book.toString());
    return bookService.createBook(book);
  }

  @RequestMapping("/api/books/{id}")
  public Book show(@PathVariable("id") Long id) {
    Book book = bookService.findBook(id);
    return book;
  }
}