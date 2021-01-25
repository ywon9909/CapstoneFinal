package com.example.capstoneweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
public class CapstonewebApplication {

    public static void main(String[] args) {

        SpringApplication.run(CapstonewebApplication.class, args);

    }

}
