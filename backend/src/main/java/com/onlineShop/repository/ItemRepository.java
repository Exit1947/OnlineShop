package com.onlineShop.repository;

import com.onlineShop.models.Users.EndUserEntities.cart.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    void deleteItemById(Long id);

    void deleteAll(List<Item> items);

}
