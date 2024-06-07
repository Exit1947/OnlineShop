package com.onlineShop.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends Person {
    @Column(name="first_name")
    @Length(min = 3, max = 50, message = "Firstname must be between 3 and 50 characters")
    private String firstName;

    @Column(name="last_name")
    @Length(min = 3, max = 50, message = "Lastname must be between 3 and 50 characters")
    private String lastName;

    @Column(name="phone")
    @Length(min = 10, max = 20, message = "Phone number must be between 10 and 20 characters")
    private String phoneNumber;

    public User(@NonNull String id, Role role,
                @NonNull @Length(min = 3, max = 50, message = "Login must be between 3 and 50 characters") String login,
                @NonNull String password, String firstName, String lastName, String phoneNumber) {
        super(id, role, login, password);
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}
