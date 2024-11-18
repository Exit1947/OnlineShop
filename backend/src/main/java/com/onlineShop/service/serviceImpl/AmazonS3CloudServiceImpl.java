package com.onlineShop.service.serviceImpl;

import com.onlineShop.service.AmazonS3CloudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.core.sync.ResponseTransformer;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;

import java.io.File;
import java.util.List;

@Service
public class AmazonS3CloudServiceImpl implements AmazonS3CloudService {

    private final S3Client s3Client;
    private final String bucketName;

    @Autowired
    public AmazonS3CloudServiceImpl(final S3Client s3Client, @Value("${s3.bucket-name}") String bucketName) throws NullPointerException {
        this.s3Client = s3Client;
        this.bucketName = bucketName;
        if(this.bucketName != null && !this.bucketName.isEmpty()) {
            if(!isBucketExist()) {
                createBucket();
            }
        }
        else{
            throw new NullPointerException("Set value for bucketName");
        }
    }

    @Override
    public void store(File uploadingFile) {
        PutObjectRequest request = PutObjectRequest
                .builder()
                .bucket(bucketName)
                .key(uploadingFile.getName())
                .build();
        RequestBody requestBody = RequestBody.fromFile(uploadingFile);
        s3Client.putObject(request, requestBody);
    }

    public void store(List<File> uploadingFile) {
        for(File mediaFile : uploadingFile) {
            store(mediaFile);
        }
    }

    @Override
    public File get(String fileName) {
        File file = new File(fileName);
        s3Client
                .getObject(request -> request.bucket(bucketName)
                    .key(fileName), ResponseTransformer.toFile(file));

        return file;
    }

    @Override
    public void rename(String oldName, String newName) {
        s3Client.copyObject(request ->
                request
                        .sourceBucket(bucketName)
                        .sourceKey(oldName)
                        .destinationBucket(bucketName)
                        .destinationKey(newName));
    }

    @Override
    public void delete(String fileName) {
        s3Client.deleteObject(request -> request.bucket(bucketName).key(fileName));
    }

    private boolean isBucketExist() {
        try {
            s3Client.headBucket(request -> request.bucket(bucketName));
            return true;
        }
        catch(S3Exception e) {
            return false;
        }
    }

    private void createBucket() {
        s3Client.createBucket(request -> request.bucket(bucketName));
    }

}
