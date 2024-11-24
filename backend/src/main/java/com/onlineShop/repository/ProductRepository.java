package com.onlineShop.repository;

import com.onlineShop.models.Product.Product;
import jakarta.validation.constraints.NotBlank;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, String> {

    Optional<Product> findByTitle(@NotBlank(message = "Title of product can't be empty") @Length(min = 3, max = 100, message = "Product title must be between 3 and 100 characters") String title);
}
