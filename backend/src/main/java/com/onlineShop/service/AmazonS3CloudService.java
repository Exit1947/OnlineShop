package com.onlineShop.service;

import java.io.File;

public interface AmazonS3CloudService {

    void store(File uploadingFile);

    File get(String fileName);

    void delete(String fileName);

    void rename(String oldName, String newName);

}
