package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Member;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, String> {
    //Optional<User> findById(String id);
}