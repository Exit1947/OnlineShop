package com.onlineShop.models.Users.EndUserEntities.shoppingOrder;

import com.onlineShop.models.Product.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderedProducts {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_shopping_order")
    private ShoppingOrder shoppingOrder;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_ordered_products")
    private List<Product> orderedProducts;

    @Positive
    @Column(name = "count_of_products")
    private int countOfProducts;

}
