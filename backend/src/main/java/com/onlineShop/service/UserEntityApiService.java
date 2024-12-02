package com.onlineShop.service;

import com.onlineShop.dto.user.userEntity.admin.AdminRequest;
import com.onlineShop.dto.user.userEntity.admin.AdminResponse;
import com.onlineShop.dto.user.userEntity.endUser.EndUserRequest;
import com.onlineShop.dto.user.userEntity.endUser.EndUserResponse;
import com.onlineShop.dto.user.userEntity.moderator.ModeratorRequest;
import com.onlineShop.dto.user.userEntity.moderator.ModeratorResponse;
import com.onlineShop.dto.user.userEntity.salesRep.SalesRepRequest;
import com.onlineShop.dto.user.userEntity.salesRep.SalesRepResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public interface UserEntityApiService {

    ResponseEntity<HttpStatus> createAdmin(AdminRequest admin);

    ResponseEntity<HttpStatus> createModerator(ModeratorRequest moderator);

    ResponseEntity<HttpStatus> createSalesRep(SalesRepRequest salesRep);

    ResponseEntity<HttpStatus> createEndUser(EndUserRequest endUser);

    ResponseEntity<AdminResponse> getAdmin(String id);

    ResponseEntity<ModeratorResponse> getModerator(String id);

    ResponseEntity<SalesRepResponse> getSalesRep(String id);

    ResponseEntity<EndUserResponse> getEndUser(String id);

    ResponseEntity<HttpStatus> updateAdmin(AdminRequest adminRequest);

    ResponseEntity<HttpStatus> updateModerator(ModeratorRequest moderatorRequest);

    ResponseEntity<HttpStatus> updateSalesRep(SalesRepRequest salesRepRequest);

    ResponseEntity<HttpStatus> updateEndUser(EndUserRequest endUserRequest);

    ResponseEntity<HttpStatus> deleteUserEntity(String id);

}
