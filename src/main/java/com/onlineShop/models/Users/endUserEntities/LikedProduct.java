package com.onlineShop.models.Users.endUserEntities;

import com.onlineShop.models.Product.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.NonNull;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LikedProduct {
    @Id
    @NonNull
    @Column(name = "id")
    private String id;

    @ManyToOne
    @JoinColumn(name="id_user")
    private EndUser user;

    @ManyToOne
    @JoinColumn(name="id_product")
    private Product product;
}
