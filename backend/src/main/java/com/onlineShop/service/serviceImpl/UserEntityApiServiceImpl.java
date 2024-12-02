package com.onlineShop.service.serviceImpl;

import com.onlineShop.dto.user.userEntity.admin.AdminRequest;
import com.onlineShop.dto.user.userEntity.admin.AdminResponse;
import com.onlineShop.dto.user.userEntity.endUser.EndUserRequest;
import com.onlineShop.dto.user.userEntity.endUser.EndUserResponse;
import com.onlineShop.dto.user.userEntity.moderator.ModeratorRequest;
import com.onlineShop.dto.user.userEntity.moderator.ModeratorResponse;
import com.onlineShop.dto.user.userEntity.salesRep.SalesRepRequest;
import com.onlineShop.dto.user.userEntity.salesRep.SalesRepResponse;
import com.onlineShop.service.UserEntityApiService;
import com.onlineShop.service.UserEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserEntityApiServiceImpl implements UserEntityApiService {

    private final UserEntityService userEntityService;
    private final AmazonS3CloudServiceImpl s3CloudService;

    @Autowired
    public UserEntityApiServiceImpl(UserEntityService userEntityService, AmazonS3CloudServiceImpl s3CloudService) {
        this.userEntityService = userEntityService;
        this.s3CloudService = s3CloudService;
    }

    @Override
    public ResponseEntity<HttpStatus> createAdmin(AdminRequest admin) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> createModerator(ModeratorRequest moderator) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> createSalesRep(SalesRepRequest salesRep) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> createEndUser(EndUserRequest endUser) {
        return null;
    }

    @Override
    public ResponseEntity<AdminResponse> getAdmin(String id) {
        return null;
    }

    @Override
    public ResponseEntity<ModeratorResponse> getModerator(String id) {
        return null;
    }

    @Override
    public ResponseEntity<SalesRepResponse> getSalesRep(String id) {
        return null;
    }

    @Override
    public ResponseEntity<EndUserResponse> getEndUser(String id) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> updateAdmin(AdminRequest adminRequest) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> updateModerator(ModeratorRequest moderatorRequest) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> updateSalesRep(SalesRepRequest salesRepRequest) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> updateEndUser(EndUserRequest endUserRequest) {
        return null;
    }

    @Override
    public ResponseEntity<HttpStatus> deleteUserEntity(String id) {
        return null;
    }

}
