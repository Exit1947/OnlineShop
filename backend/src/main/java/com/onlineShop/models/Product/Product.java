package com.onlineShop.models.Product;

import com.onlineShop.models.Feedback.Feedback;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @NotBlank
    @Column(name = "id")
    private String id;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_product")
    private List<Feedback> feedbacks;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProductCharacteristics> characteristicValues = new ArrayList<>();

    @NotBlank(message = "Category name can't be empty")
    @Column(name = "name_category")
    @Length(min = 3, max = 100)
    private String nameCategory;

    @Positive(message = "Price must be a positive number")
    private int price;

    @NotBlank(message = "Title of product can't be empty")
    @Column(name = "title")
    @Length(min = 3, max = 100, message = "Product title must be between 3 and 100 characters")
    private String title;

    @Column(name = "discount")
    private boolean discount;

    @NotBlank(message = "Thumbnail image can't be empty")
    @Column(name = "thumbnailImage_name")
    private String thumbnailImage;

}
