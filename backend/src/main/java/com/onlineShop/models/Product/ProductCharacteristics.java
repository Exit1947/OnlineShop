package com.onlineShop.models.Product;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class ProductCharacteristics {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "characteristic_id", nullable = false)
    private Characteristic characteristic;

    @NotBlank(message = "Value must not be blank")
    @Size(min = 1, max = 30, message = "Value must be between 1 and 30 characters")
    @Column(name = "characteristic_value", nullable = false)
    private String value;

}
