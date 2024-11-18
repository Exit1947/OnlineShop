package com.onlineShop.service.serviceImpl;

import com.onlineShop.models.Product.DiscountProduct;
import com.onlineShop.models.Product.Media;
import com.onlineShop.repository.DiscountProductRepository;
import com.onlineShop.service.DiscountProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DiscountProductServiceImpl implements DiscountProductService {

    private DiscountProductRepository discountProductRepository;

    @Autowired
    public DiscountProductServiceImpl(DiscountProductRepository discountProductRepository){
        this.discountProductRepository = discountProductRepository;
    }

    @Override
    public void save(DiscountProduct discountProduct) {

    }

    @Override
    public Optional<DiscountProduct> findById(String id) {
        return Optional.empty();
    }

    @Override
    public Optional<DiscountProduct> findByProductId(String mediaName) {
        return Optional.empty();
    }

    @Override
    public void update(DiscountProduct discountProduct) {

    }

    @Override
    public void delete(String id) {

    }

    @Override
    public void deleteAll(List<DiscountProduct> productList) {

    }

}
