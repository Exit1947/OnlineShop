package com.onlineShop.repository;

import com.onlineShop.models.Feedback.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, String> {

    List<Feedback> findAllByProductId(String productId);

    List<Feedback> findAllByUserId(String userId);

}
