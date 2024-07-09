package com.onlineShop.preload;

import com.onlineShop.models.Users.Privilege;
import com.onlineShop.models.Users.Role;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@Getter
public class PrivilegeRolePreload {
    private Role adminRole;
    private Role moderatorRole;
    private Role salesRepRole;
    private Role userRole;

    private final List<Role> listOfRoles;
    private final List<Privilege> listOfPrivilege;
    private final List<Privilege> basePrivilegesForRegistration = new ArrayList<>();

    @Autowired
    public PrivilegeRolePreload(List<Role> listOfRoles, List<Privilege> privileges){
        this.listOfRoles = listOfRoles;
        this.listOfPrivilege = privileges;

        configRole();
        configUserPrivilege();
    }

    private void configRole(){
        adminRole = findRole("admin");
        this.moderatorRole = findRole("moderator");
        this.salesRepRole = findRole("sales_rep");
        this.userRole = findRole("end_user");
    }
    private void configUserPrivilege(){
        this.basePrivilegesForRegistration.add(findPrivilege("BUY PRODUCT"));
        this.basePrivilegesForRegistration.add(findPrivilege("ROLE_USER"));
        //TODO: add all privileges for registration end_user (across "text" use already configured objects in class)
    }
    private Role findRole(String textRole){
        return listOfRoles
                .stream()
                .filter(role -> role.getType().equals(textRole))
                .findFirst().get();
    }
    private Privilege findPrivilege(String textPrivilege){
        return listOfPrivilege
                .stream()
                .filter(autz -> autz.getAuthority().equals(textPrivilege))
                .findFirst().get();
    }
}
