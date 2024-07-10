package com.onlineShop.models.shop;

import com.onlineShop.models.Users.Staff.Staff;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
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
    private int id;
    @NotBlank
    private String city;
    @NotBlank
    private String street;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "shops")
    private List<Staff> staff = new ArrayList<>();
}
