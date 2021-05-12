package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByUsername(String userName);

    public final static String DELETE_USER = ""
            +"delete from user_db " +
            "where username= ?1 ";

    public final static String UPDATE_USER = ""
            +"update user_db "
            +"set password= ?1 "
            +"where username= ?2 ";
    @Transactional
    @Modifying
    @Query(value = DELETE_USER, nativeQuery = true)
    void deleteByUsername(String username);

    @Transactional
    @Modifying
    @Query(value = UPDATE_USER, nativeQuery = true)
    void updateByUsername(String changePassword, String id);
}