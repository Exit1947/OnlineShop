package com.onlineShop.models.Users.Staff;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Privilege {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Text of privilege can't be empty")
    @Column(name = "privilege_text")
    private String textPrivilege;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "privileges")
    private List<Staff> staff = new ArrayList<>();

}
