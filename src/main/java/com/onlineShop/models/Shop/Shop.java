package com.onlineShop.models.Shop;

import com.onlineShop.models.Users.Staff.Staff;
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
public class Shop {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @Column(name = "city")
    private String city;

    @NotBlank
    @Column(name = "street")
    private String street;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "shops")
    private List<Staff> staff = new ArrayList<>();
}
