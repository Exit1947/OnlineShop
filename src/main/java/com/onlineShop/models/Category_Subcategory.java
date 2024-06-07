package com.onlineShop.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "role")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Category_Subcategory {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_category")
    private Category category;

    @NonNull
    @Column(name="name_subcategory")
    @Length(max = 100)
    private String nameSubcategory;

}
