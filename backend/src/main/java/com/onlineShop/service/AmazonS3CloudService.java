package com.onlineShop.service;

import java.io.File;

public interface AmazonS3CloudService {

    void upload(File uploadingFile);

    File get(String fileName);

    void delete(String fileName);

}
