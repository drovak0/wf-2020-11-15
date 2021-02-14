package com.codingdojo.m2m.services;

import java.util.List;
import java.util.Optional;

import com.codingdojo.m2m.models.Category;
import com.codingdojo.m2m.models.Product;
import com.codingdojo.m2m.repositories.CategoryRepository;

import org.springframework.stereotype.Service;

@Service
public class CategoryService {
  private final CategoryRepository categoryRepository;
  private final ProductService productService;

  public CategoryService(CategoryRepository categoryRepository, ProductService productService) {
    this.categoryRepository = categoryRepository;
    this.productService = productService;
  }

  // returns all the categorys
  public List<Category> allCategories() {
    return categoryRepository.findAll();
  }

  // createCategory
  public Category createCategory(Category category) {
    return categoryRepository.save(category);
  }

  public Category findCategoryById(Long id) {
    Optional<Category> optionalCategory = categoryRepository.findById(id);
    if (optionalCategory.isPresent()) {
      return optionalCategory.get();
    } else {
      return null;
    }
  }
  // TODO
  // add product to category

  public Category addProductCategory(Long productId, Long categoryId) {
    // get the category
    Category category = this.findCategoryById(categoryId);
    // get the product
    Product product = productService.findProductById(productId);
    // get product list

    List<Product> list = category.getProducts();
    // add product to category
    list.add(product);
    // set product list
    category.setProducts(list);
    return categoryRepository.save(category);
  }
}
