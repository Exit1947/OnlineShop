package com.onlineShop.models.Users;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Inheritance(strategy = InheritanceType.JOINED)
public class Person {
    @Id
    @NonNull
    @Column(name = "id")
    private String id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_role")
    private Role role;

    @NonNull
    @Column(name = "login")
    @Length(min = 3, max = 50, message = "Login must be between 3 and 50 characters")
    private String login;

    @NonNull
    @Column(name = "password")
    private String password;

    @Column(name = "avatar")
    private String avatar;

    @NonNull
    @Column(name = "creation_date")
    private Date creationDate;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "person_privilege",
            joinColumns = {@JoinColumn(name = "id_person")},
            inverseJoinColumns = {@JoinColumn(name="id_privilege")}
    )
    private List<Privilege> privileges = new ArrayList<>();

}
