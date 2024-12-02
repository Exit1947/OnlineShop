package com.onlineShop.dto.user.userEntity.moderator;

import com.onlineShop.dto.user.userEntity.staff.StaffResponse;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModeratorResponse extends StaffResponse {

    @NotBlank(message = "City of shop can't be empty")
    @Length(min = 3, max = 100, message = "City shop must be between 3 and 100 characters")
    private String cityShop;

    @NotBlank(message = "Street can't be empty")
    @Length(min = 3, max = 100, message = "Street must be between 3 and 100 characters")
    private String street;

    @NotBlank(message = "Admin id can't be empty")
    private String adminId;

}
