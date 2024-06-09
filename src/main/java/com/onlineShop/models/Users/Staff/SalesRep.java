package com.onlineShop.models.Users.Staff;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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

    @Column(name="company", nullable = false)
    @Length(min = 2, max = 50, message = "Company name must be between 3 and 50 characters")
    private String companyName;

    @ManyToOne
    @JoinColumn(name = "id_admin", nullable = false)
    private Admin admin;

}
