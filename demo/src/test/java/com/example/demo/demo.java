package com.example.demo;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class demo {

    private static final String APP_KEY = "hengnaowy0hD5N2ZtCjGz3BEDYr";
    private static final String APP_SECRET = "wdrruci6f53o408rpvvovw2byjjb1xgw";

    public static void main(String[] args) {
        // 生成签名
        String timestamp = String.valueOf(System.currentTimeMillis());
        String sign = generateSign(APP_KEY, APP_SECRET, timestamp);
        System.out.println("Generated sign: " + sign);
    }

    private static String generateSign(String appKey, String appSecret, String timestamp) {
        try {
            String data = appKey + timestamp;
            Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
            SecretKeySpec secret_key = new SecretKeySpec(appSecret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            sha256_HMAC.init(secret_key);
            byte[] hash = sha256_HMAC.doFinal(data.getBytes(StandardCharsets.UTF_8));
            return Base64.getEncoder().encodeToString(hash);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }
}
