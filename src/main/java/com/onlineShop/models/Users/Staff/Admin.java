package com.onlineShop.models.Users.Staff;

import com.onlineShop.models.Users.Privilege;
import com.onlineShop.models.Users.Role;
import com.onlineShop.models.Users.Person;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Admin extends Person {
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

    @Column(name="email")
    @Length(min = 3, max = 50, message = "Phone number must be between 10 and 20 characters")
    private String email;

}
