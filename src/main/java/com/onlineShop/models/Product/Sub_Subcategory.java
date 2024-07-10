package com.onlineShop.models.Product;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @NotBlank
    @Column(name="name_subcategory")
    @Length(max = 100)
    private String nameSubcategory;

    @NotBlank
    @Column(name="name_subsubcategory")
    @Length(max = 100)
    private String nameSubSubcategory;

}
