package com.onlineShop.service.serviceImpl;

import com.onlineShop.dto.MediaFilesRequest;
import com.onlineShop.dto.ProductCardInfoResponse;
import com.onlineShop.models.Product.Media;
import com.onlineShop.models.Product.Product;
import com.onlineShop.repository.ProductRepository;
import com.onlineShop.service.AmazonS3CloudService;
import com.onlineShop.service.MediaService;
import com.onlineShop.service.ProductService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.*;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    private final MediaService mediaService;

    private final AmazonS3CloudService s3CloudService;

    @Autowired
    public ProductServiceImpl(final ProductRepository productRepository, final MediaService mediaService, final AmazonS3CloudService s3CloudService) {
        this.productRepository = productRepository;
        this.mediaService = mediaService;
        this.s3CloudService = s3CloudService;
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> save(final Product product, final MediaFilesRequest mediaFilesReq) {
        Optional<Product> existingProduct = productRepository.findByTitle(product.getTitle());
        if(existingProduct.isEmpty()) {
            product.setId(UUID.randomUUID().toString());

            List<File> mediaFiles = convertRequestOfMediaFilesToListOfFiles(mediaFilesReq);
            if(!mediaFiles.isEmpty()) {
                List<Media> mediaList = new ArrayList<>();
                for(File file : mediaFiles) {
                    mediaList.add(new Media(file.getName(), product, file.getName()));
                }
                mediaService.saveAll(mediaList);
                s3CloudService.store(mediaFiles);
            }

            productRepository.save(product);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.CONFLICT);
    }

    @Override
    public ResponseEntity<Product> getById(String id) {
        Optional<Product> existingProduct = productRepository.findById(id);
        if(existingProduct.isPresent()) {
            Product product = existingProduct.get();
            product.setThumbnailImage(convertFileToBase64String(s3CloudService.get(product.getThumbnailImage())));

            return new ResponseEntity<>(product, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<ProductCardInfoResponse> getProductCardInfoById(String id) {
        return null;
    }

    @Override
    public ResponseEntity<Product> getByTitle(String title) {
        return ResponseEntity.of(productRepository.findByTitle(title));
    }

    @Override
    public ResponseEntity<ProductCardInfoResponse> getProductCardInfoByTitle(String title) {
        return null;
    }

    @Override
    @Transactional
    public ResponseEntity<HttpStatus> update(final Product product) {
        Optional<Product> existingProduct = productRepository.findByTitle(product.getTitle());
        if(existingProduct.isPresent()){
            product.setId(existingProduct.get().getId());
            productRepository.save(product);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @Override
    public ResponseEntity<HttpStatus> delete(String id) {
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private List<File> convertRequestOfMediaFilesToListOfFiles(MediaFilesRequest mediaFilesRequest){
        List<File> files = new ArrayList<>();
        for(var file : mediaFilesRequest.getMediaFiles()){
            try{
                File tmpFile = new File(UUID.randomUUID().toString());
                file.transferTo(tmpFile);
                files.add(tmpFile);
            }
            catch (IOException e){}
        }
        return files;
    }

    private String convertFileToBase64String(File file){
        byte[] bytesFile = new byte[(int) file.length()];
        try(FileInputStream fIS = new FileInputStream(file)){
            fIS.read(bytesFile);
        }
        catch (IOException e){
            return null;
        }
        return Base64.getEncoder().encodeToString(bytesFile);
    }

}
