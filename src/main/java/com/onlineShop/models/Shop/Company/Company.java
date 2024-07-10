package com.onlineShop.models.Shop.Company;

import com.onlineShop.models.Users.Staff.SalesRep;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Company {
    @Id
    private long id;

    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "image")
    private String image;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "company")
    private List<SalesRep> salesRepList = new ArrayList<>();
}
