package com.onlineShop.service;

import com.onlineShop.models.Feedback.Feedback;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface FeedbackService {

    boolean save(Feedback feedback);

    Optional<Feedback> getById(String id);

    List<Feedback> getAllForProduct(String productId);

    List<Feedback> getMainFeedbacksCountForProductAfterDate(String productId, int count, Date date);

    List<Feedback> getAllMainFeedbacksForProduct(String productId);

    List<Feedback> getAllFeedbacksForUser(String userId);

    Optional<Feedback> getLastMainCommentForProduct(String productId);

    boolean update(Feedback feedback);

    boolean delete(String id);

    boolean deleteAllForProduct(String productId);

    boolean deleteAllForUser(String userId);
}
