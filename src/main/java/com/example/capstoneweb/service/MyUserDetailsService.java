package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.User;
import com.example.capstoneweb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
        Optional<User> u = userRepository.findByUsername(username);

        u.orElseThrow(() -> new UsernameNotFoundException("Not Found: " + username));
        System.out.println(u.get());
        return u.map(MyUserDetails::new).get();
    }

    public UserDetails getUserId(String username) {
        Optional<User> u = userRepository.findByUsername(username);
        u.orElseThrow(() -> new UsernameNotFoundException("Not Found: " + username));

        return u.map(MyUserDetails::new).get();
    }

    public void deleteUser(String username) {
        userRepository.deleteByUsername(username);
    }


    public void updateUser(String changePassword, String id) {
        userRepository.updateByUsername(changePassword, id);
    }

    public User SignUpUser(User userDetails) {
        return userRepository.save(userDetails);
    }
}