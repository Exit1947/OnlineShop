package com.onlineShop.models.Users.Staff;

import com.onlineShop.models.Shop.Company.Company;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SalesRep extends Staff {
    @NotBlank(message = "City can't be empty")
    @Column(name="city_shop")
    @Length(min = 3, max = 100, message = "City shop must be between 3 and 100 characters")
    private String cityShop;

    @NotBlank(message = "Street can't be empty")
    @Column(name="street")
    @Length(min = 3, max = 100, message = "Street must be between 3 and 100 characters")
    private String street;

    @NotNull(message = "Company can't be empty")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_company")
    private Company company;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_admin")
    private Admin admin;

}
