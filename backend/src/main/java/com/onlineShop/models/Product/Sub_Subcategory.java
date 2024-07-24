package com.onlineShop.models.Product;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Sub_Subcategory {
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
    private String nameSubSubcategory;

}
