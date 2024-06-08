package com.onlineShop.models.Product;

import com.onlineShop.models.Feedback.Feedback;
import jakarta.persistence.*;
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
public class Product {
    @Id
    @NonNull
    @Column(name = "id")
    private String id;


    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_product")
    List<Feedback> feedbacks;

    @NonNull
    @Column(name = "name_category")
    @Length(min = 3, max = 100)
    private String nameCategory;

    @NonNull
    @Column(name = "title")
    @Length(min = 3, max = 100, message = "Product title must be between 3 and 100 characters")
    private String title;

    @Column(name = "discount")
    private boolean discount;

    @NonNull
    @Column(name = "thumbnail_name")
    private String thumbnailName;

}
