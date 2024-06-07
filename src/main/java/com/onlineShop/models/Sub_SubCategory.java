package com.onlineShop.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

@Entity
@Table(name = "role")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Sub_SubCategory {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name="name_subcategory")
    @Length(max = 100)
    private String nameSubcategory;

    @NonNull
    @Column(name="name_subsubcategory")
    @Length(max = 100)
    private String nameSubsubcategory;

}
