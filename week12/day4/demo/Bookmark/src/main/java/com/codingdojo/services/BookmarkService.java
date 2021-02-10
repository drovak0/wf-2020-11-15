package com.codingdojo.services;
import org.springframework.stereotype.Service;
import com.codingdojo.models.Bookmark;
import com.codingdojo.repositories.BookmarkRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookmarkService {
    // adding the book repository as a dependency
    private final BookmarkRepository bookmarkRepository;
    
    public BookmarkService(BookmarkRepository bookmarkRepository) {
        this.bookmarkRepository = bookmarkRepository;
    }
    // returns all the books
    public List<Bookmark> allBookmarks() {
        return bookmarkRepository.findAll();
    }
    // creates a book
    public Bookmark createBookmark(Bookmark b) {
        return bookmarkRepository.save(b);
    }
    // retrieves a book
    public Bookmark findBook(Long id) {
        Optional<Bookmark> optionalBookmark = bookmarkRepository.findById(id);
        if(optionalBookmark.isPresent()) {
            return optionalBookmark.get();
        } else {
            return null;
        }
    }
}