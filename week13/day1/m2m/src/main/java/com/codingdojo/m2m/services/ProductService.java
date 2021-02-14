package com.codingdojo.m2m.services;

import java.util.List;
import java.util.Optional;

import com.codingdojo.m2m.models.Product;
import com.codingdojo.m2m.repositories.ProductRepository;

import org.springframework.stereotype.Service;

@Service
public class ProductService {
  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  // returns all the products
  public List<Product> allProducts() {
    return productRepository.findAll();
  }

  // createProduct
  public Product createProduct(Product product) {
    return productRepository.save(product);
  }

  public Product findProductById(Long id) {
    Optional<Product> optionalProduct = productRepository.findById(id);
    if (optionalProduct.isPresent()) {
      return optionalProduct.get();
    } else {
      return null;
    }
  }

  // TODO
  // add category to product
}