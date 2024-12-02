package com.onlineShop.dto.user.userEntity.userEntity;

import com.onlineShop.dto.user.privilege.PrivilegeRequest;
import com.onlineShop.dto.user.role.RoleRequest;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Length;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntityRequest {

    private String id;

    @Length(min = 3, max = 50, message = "Login must be between 3 and 50 characters")
    private String login;

    @Length(min = 3, max = 50, message = "Email number must be between 10 and 20 characters")
    private String email;

    @Length(min = 3, max = 50, message = "Phone number must be between 10 and 20 characters")
    private String phoneNumber;

    @NotBlank(message = "Firstname can't be empty")
    @Length(min = 3, max = 50, message = "Firstname must be between 3 and 50 characters")
    private String firstName;

    private String password;

    private boolean avatar;

    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

    @NotNull
    private RoleRequest role;

    @NotNull
    private List<PrivilegeRequest> privileges;

}
