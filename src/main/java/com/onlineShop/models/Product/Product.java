package com.onlineShop.models.Product;

import com.onlineShop.models.Feedback.Feedback;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Inheritance(strategy = InheritanceType.JOINED)
public class Product {
    @Id
    @NotBlank
    @Column(name = "id")
    private String id;


    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_product")
    List<Feedback> feedbacks;

    @NotBlank
    @Column(name = "name_category")
    @Length(min = 3, max = 100)
    private String nameCategory;

    @NotBlank
    @Column(name = "title")
    @Length(min = 3, max = 100, message = "Product title must be between 3 and 100 characters")
    private String title;

    @Column(name = "discount")
    private boolean discount;

    @NotBlank
    @Column(name = "thumbnail_name")
    private String thumbnailName;

}
