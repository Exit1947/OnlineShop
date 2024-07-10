package com.onlineShop.models.Users;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class Person {
    @Id
    @NotBlank
    @Column(name = "id")
    private String id;

    @NotNull
    @ManyToOne(optional = false)
    @JoinColumn(name = "id_role")
    private Role role;

    @NotNull
    @Column(name = "login")
    @Length(min = 3, max = 50, message = "Login must be between 3 and 50 characters")
    private String login;

    @NotBlank
    @Column(name="email", unique = true)
    @Length(min = 3, max = 50, message = "Email number must be between 10 and 20 characters")
    private String email;

    @NotBlank
    @Column(name="phone")
    @Length(min = 3, max = 50, message = "Phone number must be between 10 and 20 characters")
    private String phoneNumber;

    @NotBlank
    @JsonIgnore
    @Column(name = "password")
    private String password;

    @NotBlank
    @Column(name = "avatar")
    private String avatar;

    @NotNull
    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

}
