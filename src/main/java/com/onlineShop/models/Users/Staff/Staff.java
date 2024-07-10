package com.onlineShop.models.Users.Staff;

import com.onlineShop.models.Users.Person;
import com.onlineShop.models.Shop.Shop;
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
@Inheritance(strategy = InheritanceType.JOINED)
public class Staff extends Person {
    @NotBlank
    @Column(name="first_name")
    @Length(min = 3, max = 50, message = "Firstname must be between 3 and 50 characters")
    private String firstName;

    @NotBlank
    @Column(name="last_name")
    @Length(min = 3, max = 50, message = "Lastname must be between 3 and 50 characters")
    private String lastName;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "staff_privilege",
            joinColumns = {@JoinColumn(name = "id_staff")},
            inverseJoinColumns = {@JoinColumn(name="id_privilege")}
    )
    private List<Privilege> privileges = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(
            name = "staff_list",
            joinColumns = {@JoinColumn(name = "id_staff")},
            inverseJoinColumns = {@JoinColumn(name = "id_shop")}
    )
    private List<Shop> shops = new ArrayList<>();
}
