package com.onlineShop.dto.user.userEntity.salesRep;

import com.onlineShop.dto.user.userEntity.staff.StaffResponse;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SalesRepResponse extends StaffResponse {

    @NotBlank(message = "City can't be empty")
    @Length(min = 3, max = 100, message = "City shop must be between 3 and 100 characters")
    private String cityShop;

    @NotBlank(message = "Street can't be empty")
    @Length(min = 3, max = 100, message = "Street must be between 3 and 100 characters")
    private String street;

    @NotBlank(message = "Company can't be empty")
    private String companyId;

    @NotBlank(message = "Admin id can't be empty")
    private String adminId;

}
