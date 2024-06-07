package com.onlineShop.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

@Entity
@Table(name="person")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Person {
    @Id
    @NonNull
    @Column(name = "id")
    private String id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "role_id")
    private Role role;

    @NonNull
    @Column(name="login")
    @Length(min = 3, max = 50, message = "Login must be between 3 and 50 characters")
    private String login;

    @NonNull
    @Column(name="password")
    private String password;

}
