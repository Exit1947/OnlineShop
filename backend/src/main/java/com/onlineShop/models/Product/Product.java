package com.onlineShop.models.Product;

import com.onlineShop.models.Feedback.Feedback;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class Product {

    @Id
    @NotBlank
    @Column(name = "id")
    private String id;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_product")
    List<Feedback> feedbacks;

    @NotBlank(message = "Category name can't be empty")
    @Column(name = "name_category")
    @Length(min = 3, max = 100)
    private String nameCategory;

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
