package com.onlineShop.models.Users.RolePrivilege;

import com.onlineShop.service.PrivilegeService;
import com.onlineShop.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RolePrivilegeConfig {

    public final Role ADMIN;
    public final Role MODERATOR;
    public final Role SALES_REP;
    public final Role END_USER;

    public final List<Privilege> baseRegisterPrivilege;
    public final List<Role> listOfAllRoles;
    public final List<Privilege> listOfAllPrivileges;

    @Autowired
    public RolePrivilegeConfig(RoleService roleRepository, PrivilegeService privilegeService) {
        listOfAllRoles = roleRepository.getAll();
        listOfAllPrivileges = privilegeService.getAll();
        baseRegisterPrivilege = baseRegisterPrivilege();

        ADMIN = findByTypeOfRole(RoleType.ADMIN);
        MODERATOR = findByTypeOfRole(RoleType.MODERATOR);
        SALES_REP = findByTypeOfRole(RoleType.SALES_REP);
        END_USER = findByTypeOfRole(RoleType.END_USER);
    }

    private Role findByTypeOfRole(RoleType type){
        return listOfAllRoles.stream()
                .filter(role -> role.getType().equals(type))
                .findFirst().get();
    }

    private List<Privilege> baseRegisterPrivilege(){
        List<PrivilegeType> privilegeTypes = baseEndUserPrivilegeType();

        return listOfAllPrivileges.stream()
                .filter(priv -> privilegeTypes.contains(priv.getType()))
                .toList();
    }

    private List<PrivilegeType> baseEndUserPrivilegeType(){
        return List.of(PrivilegeType.ROLE_END_USER, PrivilegeType.BUY_PRODUCT);
    }

}
