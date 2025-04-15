package com.example.demo.controller;

import okhttp3.*;
import okhttp3.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class AgentController {

    private static final String APP_KEY = "hengnaowy0hD5N2ZtCjGz3BEDYr";
    private static final String APP_SECRET = "wdrruci6f53o408rpvvovw2byjjb1xgw";
    private static final String AGENT_SEARCH_URL = "https://www.das-ai.com/open/api/v2/agent/search";
    private static final String AGENT_EXECUTE_URL = "https://www.das-ai.com/open/api/v2/agent/execute";
    private static final OkHttpClient client = new OkHttpClient();

    @CrossOrigin(origins = "*")
    @GetMapping("/get")
    public ResponseEntity<String> callAgentNew(@RequestParam String input) {
        System.out.println("input:" + input);

        String sign = getSign(APP_KEY, APP_SECRET);
        String id = "aa756b69-ec9c-4d1b-8e0e-127e8f01cec3";
        String sid = UUID.randomUUID().toString();

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("id", id);
        requestBody.put("input", input);
        requestBody.put("sid", sid);

        MediaType JSON = MediaType.get("application/json; charset=utf-8");
        String json = new com.google.gson.Gson().toJson(requestBody);
        RequestBody body = RequestBody.create(json, JSON);

        Request request = new Request.Builder()
                .url(AGENT_EXECUTE_URL)
                .post(body)
                .addHeader("appKey", APP_KEY)
                .addHeader("sign", sign)
                .addHeader("Content-Type", "application/json")
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                String responseData = response.body().string();
                return new ResponseEntity<>(responseData, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(response.message(), HttpStatus.valueOf(response.code()));
            }
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<String> callAgentSearch() {
        String sign = getSign(APP_KEY, APP_SECRET);

        Request request = new Request.Builder()
                .url(AGENT_SEARCH_URL)
                .post(RequestBody.create("", MediaType.get("application/json")))
                .addHeader("appKey", APP_KEY)
                .addHeader("sign", sign)
                .addHeader("Content-Type", "application/json")
                .addHeader("Accept", "application/json")
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                String responseData = response.body().string();
                return new ResponseEntity<>(responseData, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(response.message(), HttpStatus.valueOf(response.code()));
            }
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public static String getSign(String key, String secret) {
        long timestamp = System.currentTimeMillis();
        String data = String.format("%d\n%s\n%s", timestamp, secret, key);
        try {
            Mac hmacSHA256 = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
            hmacSHA256.init(secretKeySpec);
            byte[] sign = hmacSHA256.doFinal(data.getBytes(StandardCharsets.UTF_8));
            return String.format("%d%s", timestamp, new String(Base64.getEncoder().encode(sign), StandardCharsets.UTF_8));
        } catch (Exception e) {
            throw new RuntimeException("生成签名时出错", e);
        }
    }
}    