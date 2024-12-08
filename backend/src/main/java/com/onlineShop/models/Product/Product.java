package com.onlineShop.models.Product;

import com.onlineShop.models.Product.Characteristic.ProductCharacteristic;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @NotBlank
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductCharacteristic> characteristicValues = new ArrayList<>();

    @NotBlank(message = "Category name can't be empty")
    @Column(name = "name_category")
    @Length(min = 3, max = 150)
    private String nameCategory;

    @Positive(message = "Price must be a positive number")
    private double price;

    @NotBlank(message = "Title of product can't be empty")
    @Column(name = "title")
    @Length(min = 3, max = 250, message = "Product title must be between 3 and 250 characters")
    private String title;

    @Column(name = "description")
    @Length(min = 10, max = 2500, message = "Product description must be between 10 and 2500 characters")
    private String description;

    @Column(name = "discount")
    private boolean discount;

    @Column(name = "thumbnailImage_name")
    private String thumbnailImage;

}
