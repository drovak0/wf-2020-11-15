package com.codingdojo.m2m.controllers;

import java.util.List;

import com.codingdojo.m2m.models.Category;
import com.codingdojo.m2m.services.CategoryService;
import com.codingdojo.m2m.services.ProductService;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoriesApi {
  private final CategoryService categoryService;
  private final ProductService productService;

  public CategoriesApi(CategoryService categoryService, ProductService productService) {
    this.categoryService = categoryService;
    this.productService = productService;
  }

  @RequestMapping("/api/categories")
  public List<Category> index() {
    return categoryService.allCategories();
  }

  @RequestMapping(
    value = "/api/categories",
    method = RequestMethod.POST
  )
  public Category create(
    @RequestParam(value = "name") String name
  ) {
    Category category = new Category(name);
    System.out.println("category: " + category.toString());
    return categoryService.createCategory(category);
  }

  @RequestMapping(
    value="/api/categories/{categoryId}/addProduct",
    method = RequestMethod.POST
  )
  public Category addProduct(
      @PathVariable("categoryId") Long categoryId,
      @RequestParam(value = "productId") Long productId
  ){
    return categoryService.addProductCategory(productId, categoryId);
  }
}