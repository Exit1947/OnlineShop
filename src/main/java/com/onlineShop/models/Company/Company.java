package com.onlineShop.models.Company;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NonNull
    @Column(name="name", nullable = false)
    private String name;

    @NonNull
    @Column(name="image", nullable = false)
    private String image;
}
