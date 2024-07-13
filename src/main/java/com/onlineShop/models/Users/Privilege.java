package com.onlineShop.models.Users;

import com.onlineShop.models.Users.Staff.Staff;
import jakarta.persistence.*;
import lombok.*;
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

    @Column(name = "privilege_text")
    private String textPrivilege;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "privileges")
    private List<Person> users = new ArrayList<>();

    @Override
    public String getAuthority() {
        return textPrivilege;
    }
}
