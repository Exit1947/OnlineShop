package com.onlineShop.models.Users;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;
import org.hibernate.validator.constraints.Length;
import java.time.OffsetDateTime;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Inheritance(strategy = InheritanceType.JOINED)
public class UserInformation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_role", nullable = false)
    private Role role;

    @Column
    private String name;

    @Column
    private String last_name;

    @Email
    private String email;

    @Column(nullable = false)
    @Length(min = 3, max = 50, message = "Phone number must be between 10 and 50 characters")
    private String phoneNumber;

    @Column(nullable = false)
    private String password;

    @Column
    private String avatar;

    @Column(nullable = false)
    private OffsetDateTime creationDateTime;
}
