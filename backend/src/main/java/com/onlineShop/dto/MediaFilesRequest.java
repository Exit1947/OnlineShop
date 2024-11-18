package com.onlineShop.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class MediaFilesRequest {

    private List<MultipartFile> mediaFiles;

    public MediaFilesRequest(final List<MultipartFile> mediaFiles) {
        this.mediaFiles = mediaFiles;
    }

}