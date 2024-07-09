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
    @Column(name = "id")
    private String id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_role", nullable = false)
    private Role role;

    @Column(name="email", nullable = false)
    @Length(min = 3, max = 50, message = "Email number must be between 10 and 20 characters")
    private String email;

    @Column(name="phone", nullable = false)
    @Length(min = 3, max = 50, message = "Phone number must be between 10 and 20 characters")
    private String phoneNumber;

    @NonNull
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "avatar")
    private String avatar;

    @NonNull
    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(
            name = "person_privilege",
            joinColumns = {@JoinColumn(name = "id_person")},
            inverseJoinColumns = {@JoinColumn(name="id_privilege")}
    )
    private List<Privilege> privileges = new ArrayList<>();

}
