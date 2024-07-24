package com.onlineShop.models.Users.RolePrivilege;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@Setter
public class Role {

    public Role() {
    }

    public Role(final RoleType type) {
        this.type = type;
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "type", unique = true)
    @Enumerated(EnumType.STRING)
    private RoleType type;

}
