package com.codingdojo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.models.Bookmark;

@Repository
public interface BookmarkRepository extends CrudRepository<Bookmark, Long> {
	// this method retrieves all the books from the database
	List<Bookmark> findAll();
}
