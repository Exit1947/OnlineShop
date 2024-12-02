package com.onlineShop.converter.users;

import com.onlineShop.dto.user.userEntity.admin.AdminRequest;
import com.onlineShop.dto.user.userEntity.admin.AdminResponse;
import com.onlineShop.dto.user.userEntity.endUser.EndUserRequest;
import com.onlineShop.dto.user.userEntity.endUser.EndUserResponse;
import com.onlineShop.dto.user.userEntity.moderator.ModeratorRequest;
import com.onlineShop.dto.user.userEntity.moderator.ModeratorResponse;
import com.onlineShop.dto.user.userEntity.salesRep.SalesRepRequest;
import com.onlineShop.dto.user.userEntity.salesRep.SalesRepResponse;
import com.onlineShop.dto.user.userEntity.staff.StaffRequest;
import com.onlineShop.dto.user.userEntity.staff.StaffResponse;
import com.onlineShop.dto.user.userEntity.userEntity.UserEntityRequest;
import com.onlineShop.dto.user.userEntity.userEntity.UserEntityResponse;
import com.onlineShop.models.Shop.Company.Company;
import com.onlineShop.models.Shop.Shop;
import com.onlineShop.models.Users.EndUser;
import com.onlineShop.models.Users.Staff.Admin;
import com.onlineShop.models.Users.Staff.Moderator;
import com.onlineShop.models.Users.Staff.SalesRep;
import com.onlineShop.models.Users.Staff.Staff;
import com.onlineShop.models.Users.UserEntity;

public class UserEntityConverter {

    public static Admin toAdmin(AdminRequest adminRequest) {
        return ((Admin)toStaffEntity(adminRequest));
    }

    public static Moderator toModerator(ModeratorRequest moderatorRequest) {
        Moderator moderator = ((Moderator)toStaffEntity(moderatorRequest));
        moderator.setStreet(moderatorRequest.getStreet());
        moderator.setCityShop(moderatorRequest.getCityShop());

        Admin admin = new Admin();
        admin.setId(moderatorRequest.getId());
        moderator.setAdmin(admin);

        return moderator;
    }

    public static SalesRep toSalesRep(SalesRepRequest salesRepRequest) {
        SalesRep salesRep = ((SalesRep)toStaffEntity(salesRepRequest));
        salesRep.setStreet(salesRepRequest.getStreet());
        salesRep.setCityShop(salesRepRequest.getCityShop());

        Admin admin = new Admin();
        admin.setId(salesRep.getId());
        salesRep.setAdmin(admin);

        Company company = new Company();
        company.setId(salesRepRequest.getCompanyId());
        salesRep.setCompany(company);

        return salesRep;
    }

    public static EndUser toEndUser(final EndUserRequest endUserRequest){
        EndUser endUser = ((EndUser)toUserEntity(endUserRequest));
        endUser.setFirstName(endUserRequest.getFirstName());
        endUser.setLastName(endUserRequest.getLastName());

        return endUser;
    }

    public static AdminResponse toAdminResponse(Admin admin) {
        return ((AdminResponse) toStaffResponse(admin));
    }

    public static ModeratorResponse toModeratorResponse(Moderator moderator) {
        ModeratorResponse moderatorResponse = ((ModeratorResponse) toStaffResponse(moderator));
        moderatorResponse.setStreet(moderator.getStreet());
        moderatorResponse.setCityShop(moderator.getCityShop());
        moderatorResponse.setAdminId(moderator.getAdmin().getId());

        return moderatorResponse;
    }

    public static SalesRepResponse toSalesRepResponse(SalesRep salesRep) {
        SalesRepResponse salesRepResponse = ((SalesRepResponse)toStaffResponse(salesRep));
        salesRepResponse.setStreet(salesRep.getStreet());
        salesRepResponse.setCityShop(salesRep.getCityShop());
        salesRepResponse.setAdminId(salesRep.getAdmin().getId());
        salesRepResponse.setCompanyId(salesRep.getId());

        return salesRepResponse;
    }

    public static EndUserResponse toEndUserResponse(EndUser endUser) {
        EndUserResponse endUserResponse = ((EndUserResponse)toUserEntityResponse(endUser));
        endUserResponse.setFirstName(endUser.getFirstName());
        endUserResponse.setLastName(endUser.getLastName());

        return endUserResponse;
    }


    private static UserEntity toUserEntity(UserEntityRequest userEntityRequest){
        return UserEntity.builder()
                .email(userEntityRequest.getEmail())
                .login(userEntityRequest.getLogin())
                .phoneNumber(userEntityRequest.getPhoneNumber())
                .password(userEntityRequest.getPassword())
                .creationDate(userEntityRequest.getCreationDate())
                .build();
    }

    private static Staff toStaffEntity(StaffRequest staffRequest){
        Staff staff = ((Staff)toUserEntity(staffRequest));
        staff.setFirstName(staffRequest.getFirstName());
        staff.setLastName(staffRequest.getLastName());
        staff.setShops(staffRequest.getShopIds().stream()
                .map(id -> {
                    Shop shop = new Shop();
                    shop.setId(id);
                    return shop;})
                .toList());

        return staff;
    }

    private static StaffResponse toStaffResponse(Staff staff) {
        StaffResponse staffResponse = ((StaffResponse) toUserEntityResponse(staff));
        staffResponse.setFirstName(staff.getFirstName());
        staffResponse.setLastName(staff.getLastName());
        staffResponse.setShopIds(staff.getShops().stream()
                .map(Shop::getId)
                .toList());

        return staffResponse;
    }

    private static UserEntityResponse toUserEntityResponse(UserEntity userEntity) {
        return UserEntityResponse.builder()
                .email(userEntity.getEmail())
                .login(userEntity.getLogin())
                .phoneNumber(userEntity.getPhoneNumber())
                .creationDate(userEntity.getCreationDate())
                .build();
    }

}