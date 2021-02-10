package com.codingdojo.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
		return "redirect:/bookmarks";
	}

	@RequestMapping("/bookmarks")
	public String bookmarks(@ModelAttribute("bookmark") Bookmark bookmark, Model model) {
		List<Bookmark> allBookmarkz = bookmarkService.allBookmarks();
		model.addAttribute("allBookmarks", allBookmarkz);
		return "bookmarks.jsp";
	}

	// @PostMapping("/bookmarks")
	@RequestMapping(value = "/bookmarks", method = RequestMethod.POST)
	public String postNewBookmark(@Valid @ModelAttribute("bookmark") Bookmark bookmark, BindingResult result,
			Model model) {
		System.out.println(result);
		if (result.hasErrors()) {
			List<Bookmark> bookmarks = bookmarkService.allBookmarks();
			model.addAttribute("bookmarks", bookmarks);
			return "bookmarks.jsp";
		} else {
			bookmarkService.createBookmark(bookmark);
			return "redirect:/bookmarks";
		}
	}

	// ● The GET /languages/{id} route should return the specific language and
	// details.
	@RequestMapping("/bookmarks/{id}")
	public String getOneBookmark(@PathVariable("id") Long id, Model model) {
		Bookmark bookmark = bookmarkService.findBookmark(id);
		model.addAttribute("bookmark", bookmark);
		return "show.jsp";
	}

	// ● The GET /languages/{id}/edit route should show the edit page to of a
	// specific language
	@RequestMapping("/bookmarks/{id}/edit")
	public String editBookmark(@PathVariable("id") Long id, Model model) {
		Bookmark bookmark = bookmarkService.findBookmark(id);
		model.addAttribute("bookmark", bookmark);
		return "edit.jsp";
	}

	// ● The PUT /languages/{id} route should should update a language
	// @PutMapping("/bookmarks/{id}/edit")
	@RequestMapping(value = "/bookmarks/{id}/edit", method = RequestMethod.POST)
	public String updateBookmark(@Valid @ModelAttribute("bookmark") Bookmark bookmark, BindingResult result,
			@PathVariable("id") Long id, Model model) {
		System.out.println(result);
		System.out.println("Made it to update method");
		if (result.hasErrors()) {
			Bookmark thisBookmark = bookmarkService.findBookmark(id);
			model.addAttribute("bookmark", thisBookmark);
			return "edit.jsp";
		} else {
			bookmarkService.updateBookmark(bookmark, id);
			return "redirect:/bookmarks";
		}
	}

	// ● The DELETE /languages/{id} route should delete the specific language at
	// that id.
	// @DeleteMapping("/bookmarks/{id}/delete")
	@RequestMapping(value = "/bookmarks/{id}/delete", method = RequestMethod.POST)
	public String deleteBookmark(@PathVariable("id") Long id) {
		System.out.println("we are in the delete function");
		bookmarkService.deleteBookmark(id);
		return "redirect:/bookmarks";
	}
}
