package com.onlineShop.service.serviceImpl;

import com.onlineShop.models.Product.DiscountProduct;
import com.onlineShop.repository.DiscountProductRepository;
import com.onlineShop.service.DiscountProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class DiscountProductServiceImpl implements DiscountProductService {

    private final DiscountProductRepository discountProductRepository;

    @Autowired
    public DiscountProductServiceImpl(final DiscountProductRepository discountProductRepository){
        this.discountProductRepository = discountProductRepository;
    }

    @Override
    @Transactional
    public void save(DiscountProduct discountProduct) {
        Optional<DiscountProduct> existedDiscountProduct = discountProductRepository.findByProductId(discountProduct.getProduct().getId());
        if(existedDiscountProduct.isEmpty()){
            discountProduct.setDiscount(discountProduct.getDiscount());
            discountProduct.setDateFrom(discountProduct.getDateFrom());
            discountProduct.setDateTo(discountProduct.getDateTo());
            discountProduct.setProduct(discountProduct.getProduct());

            discountProductRepository.save(discountProduct);
        }
    }

    @Override
    public Optional<DiscountProduct> findById(long id) {
        return discountProductRepository.findById(id);
    }

    @Override
    public Optional<DiscountProduct> findByProductId(String productId) {
        return discountProductRepository.findByProductId(productId);
    }

    @Override
    public void update(DiscountProduct discountProduct) {
        Optional<DiscountProduct> existedDiscountProduct = discountProductRepository.findByProductId(discountProduct.getProduct().getId());
        if(existedDiscountProduct.isPresent()){
            DiscountProduct existingDiscount = existedDiscountProduct.get();
            discountProduct.setId(discountProduct.getId());

            discountProductRepository.save(discountProduct);
        }
    }

    @Override
    public void delete(long id) {
        Optional<DiscountProduct> existedDiscountProduct = discountProductRepository.findById(id);
        if(existedDiscountProduct.isPresent()){
            discountProductRepository.deleteById(id);
        }
    }

    @Override
    public void deleteAll(List<DiscountProduct> productList) {
        for(DiscountProduct discountProduct : productList){
            delete(discountProduct.getId());
        }
    }

}
