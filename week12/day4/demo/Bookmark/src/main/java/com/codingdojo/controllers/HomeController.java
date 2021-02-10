package com.codingdojo.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.models.Bookmark;
import com.codingdojo.services.BookmarkService;

@Controller
public class HomeController {
	private final BookmarkService bookmarkService;
	public HomeController(BookmarkService bookmarkService) {
		this.bookmarkService = bookmarkService;
	}
	@RequestMapping("")
	public String index(Model model) {
		List<Bookmark> allBookmarkz = bookmarkService.allBookmarks();
		model.addAttribute("allBookmarks", allBookmarkz);
		return "index.jsp";
	}

}
