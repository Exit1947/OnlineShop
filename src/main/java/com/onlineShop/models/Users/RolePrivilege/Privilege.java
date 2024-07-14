package com.onlineShop.models.Users.RolePrivilege;

import com.onlineShop.models.Users.UserEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Privilege implements GrantedAuthority {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "type", unique = true)
    @Enumerated(EnumType.STRING)
    private PrivilegeType type;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "privileges")
    private List<UserEntity> users = new ArrayList<>();

    @Override
    public String getAuthority() {
        return type.name();
    }

}
