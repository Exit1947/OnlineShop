package com.onlineShop.models.Users.Staff;

import com.onlineShop.models.Users.UserEntity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class Staff extends UserEntity {
    @Column(name="first_name", nullable = false)
    @Length(min = 3, max = 50, message = "Firstname must be between 3 and 50 characters")
    private String firstName;

    @Column(name="last_name", nullable = false)
    @Length(min = 3, max = 50, message = "Lastname must be between 3 and 50 characters")
    private String lastName;

}
