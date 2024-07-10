package com.onlineShop.models.Users.Staff;

import com.onlineShop.models.Shop.Company.Company;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SalesRep extends Staff {
    @NonNull
    @Column(name="city_shop", nullable = false)
    @Length(min = 3, max = 100, message = "City shop must be between 3 and 100 characters")
    private String cityShop;

    @NonNull
    @Column(name="street", nullable = false)
    @Length(min = 3, max = 100, message = "Street must be between 3 and 100 characters")
    private String street;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_company", nullable = false)
    private Company company;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_admin", nullable = false)
    private Admin admin;

}
