package com.onlineShop.models.Product;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.lang.NonNull;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Media {
    @Id
    @NonNull
    @Column(name = "id")
    private String id;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name="id_product")
    private Product product;
}
