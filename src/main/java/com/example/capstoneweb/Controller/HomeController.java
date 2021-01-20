package com.example.capstoneweb.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HomeController {

    @GetMapping("/api/hello")
    public String hello(){
        return "현재 서버 시간은 "+new Date() +"입니다.\n";
    }
}
