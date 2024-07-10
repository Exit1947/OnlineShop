package com.onlineShop.models.Users.endUserEntities;

import com.onlineShop.models.Users.Person;
import com.onlineShop.models.Users.endUserEntities.shoppingOrder.ShoppingOrder;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EndUser extends Person {
    @NotBlank
    @Column(name="first_name")
    @Length(min = 3, max = 50, message = "Firstname must be between 3 and 50 characters")
    private String firstName;

    @Column(name="last_name")
    @Length(min = 3, max = 50, message = "Lastname must be between 3 and 50 characters")
    private String lastName;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_end_user")
    private List<ShoppingOrder> shoppingOrders = new ArrayList<>();
}
