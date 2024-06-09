package com.onlineShop.models.Users.Staff;

import com.onlineShop.models.Users.Person;
import com.onlineShop.models.Users.Privilege;
import com.onlineShop.models.Users.Role;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class SalesRep extends Person {
    @Column(name="first_name")
    @Length(min = 3, max = 50, message = "Firstname must be between 3 and 50 characters")
    private String firstName;

    @Column(name="last_name")
    @Length(min = 3, max = 50, message = "Lastname must be between 3 and 50 characters")
    private String lastName;

    @NonNull
    @Column(name="phone")
    @Length(min = 10, max = 20, message = "Phone number must be between 10 and 20 characters")
    private String phoneNumber;

    @NonNull
    @Column(name="city_shop")
    @Length(min = 3, max = 100, message = "City shop must be between 3 and 100 characters")
    private String cityShop;

    @NonNull
    @Column(name="street")
    @Length(min = 3, max = 100, message = "Street must be between 3 and 100 characters")
    private String street;

    @Column(name="email")
    @Length(min = 3, max = 50, message = "Phone number must be between 3 and 50 characters")
    private String email;

    @Column(name="company")
    @Length(min = 2, max = 50, message = "Company name must be between 3 and 50 characters")
    private String companyName;

    @ManyToOne
    @JoinColumn(name = "id_admin")
    private Admin admin;
}
