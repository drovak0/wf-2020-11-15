package com.codingdojo.m2m.controllers;

import java.util.List;

import com.codingdojo.m2m.models.Product;
import com.codingdojo.m2m.services.ProductService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductsApi {
  private final ProductService productService;

  public ProductsApi(ProductService productService) {
    this.productService = productService;
  }

  @RequestMapping("/api/products")
  public List<Product> index() {
    return productService.allProducts();
  }

  @RequestMapping(value = "/api/products", method = RequestMethod.POST)
  public Product create(
    @RequestParam(value = "name") String name,
    @RequestParam(value = "description") String description,
    @RequestParam(value = "price") float price
  ) {
    Product product = new Product(name, description, price);
    System.out.println("product: " + product.toString());
    return productService.createProduct(product);
  }
}