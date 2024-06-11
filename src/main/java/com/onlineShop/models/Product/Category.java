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
public class Category {
    @Id
    @NonNull
    @Column(name = "id")
    private String id;

    @NonNull
    @Column(name="name")
    @Length(min = 3, max = 100, message = "Name of category is either too short or exceeds the limit of 3 to 100 characters")
    private String name;

    @NonNull
    @Column(name="photo")
    private String photo;
}
