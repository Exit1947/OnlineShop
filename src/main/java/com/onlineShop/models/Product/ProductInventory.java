package com.onlineShop.models.Product;

import com.onlineShop.models.shop.Shop;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductInventory {
    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_shop")
    private Shop shop;

    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;
    private int count;
}
