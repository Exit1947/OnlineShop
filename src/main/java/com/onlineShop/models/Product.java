package com.onlineShop.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

import java.util.List;

@Entity
@Table(name = "product")
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
    @Column(name = "name_subcategory")
    @Length(min = 3, max = 100)
    private String nameSubcategory;

    @NonNull
    @Column(name = "title")
    @Length(min = 3, max = 100, message = "Product title must be between 3 and 100 characters")
    private String title;

    @Column(name = "discount")
    private boolean discount;

}
