package com.example.capstoneweb.service;

import com.example.capstoneweb.model.User;
import com.example.capstoneweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> u = userRepository.findByUserName(username);

        u.orElseThrow(() -> new UsernameNotFoundException("Not Found: " + username));
        System.out.println(u.get());
        return u.map(MyUserDetails::new).get();
    }


}