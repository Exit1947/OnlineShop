package com.onlineShop.models.Users.Staff;

import com.onlineShop.models.Users.Person;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Privilege {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "privilege_text")
    private String textPrivilege;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "privileges")
    private List<Staff> staff = new ArrayList<>();

}
