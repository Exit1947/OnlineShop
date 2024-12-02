package com.onlineShop.dto.user.userEntity.staff;

import com.onlineShop.dto.user.userEntity.userEntity.UserEntityRequest;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StaffRequest extends UserEntityRequest {

    @NotBlank(message = "Lastname can't be empty")
    @Length(min = 3, max = 50, message = "Lastname must be between 3 and 50 characters")
    private String lastName;

}
