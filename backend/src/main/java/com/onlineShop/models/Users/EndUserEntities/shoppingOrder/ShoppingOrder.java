package com.onlineShop.models.Users.EndUserEntities.shoppingOrder;

import com.onlineShop.models.Users.EndUser;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ShoppingOrder {
    @Id
    @NotBlank
    @Column(name = "id")
    private String id;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_end_user")
    private EndUser endUser;

    @NotNull
    @Column(name = "shopping_order_created_at")
    private Date orderCreatedAt;
}
