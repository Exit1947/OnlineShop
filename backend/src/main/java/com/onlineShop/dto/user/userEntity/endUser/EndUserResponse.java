package com.onlineShop.dto.user.userEntity.endUser;

import com.onlineShop.dto.user.userEntity.userEntity.UserEntityResponse;
import jakarta.persistence.Column;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EndUserResponse extends UserEntityResponse {

    @Length(min = 3, max = 50, message = "Lastname must be between 3 and 50 characters")
    private String lastName;

}
