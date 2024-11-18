package com.onlineShop.service;

import java.io.File;
import java.util.List;

public interface AmazonS3CloudService {

    void store(File uploadingFile);

    void store(List<File> uploadingFile);

    File get(String fileName);

    void delete(String fileName);

    void rename(String oldName, String newName);

}
