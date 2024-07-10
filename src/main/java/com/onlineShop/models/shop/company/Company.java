package com.onlineShop.models.shop.company;

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
    private int id;
    @NotBlank
    private String name;
    @NotBlank
    private String image;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "company")
    private List<SalesRep> salesRepList = new ArrayList<>();
}
