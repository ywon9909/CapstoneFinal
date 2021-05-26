package com.example.capstoneweb.Controller;

import com.example.capstoneweb.model.AuthenticationRequest;
import com.example.capstoneweb.model.AuthenticationResponse;
import com.example.capstoneweb.model.User;
import com.example.capstoneweb.model.Username;
import com.example.capstoneweb.service.JwtUtil;
import com.example.capstoneweb.service.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class AuthenticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtTokenUtil;

    //login 할때 토큰값 생성
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final UserDetails userDetails =
                userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    //토큰 값 넘겨줄 경우 username 가져오기-web
    @GetMapping("/api/board/authenticate")
    public String getUsername() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        System.out.println(userDetails.getUsername());
        return userDetails.getUsername();
    }

    //회원가입
    @PostMapping("/api/member")
    public User SignUpUser(@RequestBody User user) {
        return userDetailsService.SignUpUser(user);
    }


    //회원탈퇴
    @DeleteMapping("/api/member/{id}")
    public void deleteMemberById(@PathVariable String id) {
        userDetailsService.deleteUser(id);
    }


    //id 값을 넘겨줄 경우 user 객체 받아오기, 비밀번호 변경시 활용
    @GetMapping("/api/member/{id}")
    public UserDetails getUserId(@PathVariable String id) {
        UserDetails u = userDetailsService.getUserId(id);
        return u;
    }

    //비밀번호변경
    @PutMapping("/api/member/{changePassword}/{id}")
    public void updateMember(@PathVariable String changePassword, @PathVariable String id) {
        userDetailsService.updateUser(changePassword, id);
    }


    //토큰 값 넘겨줄 경우 username 가져오기-mobile
    @GetMapping("/api/board/mobile/authenticate")
    public Username getUsername2() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        System.out.println(userDetails.getUsername());
        Username us = new Username();
        us.setUsername("username");
        us.setName(userDetails.getUsername());
        return us;
    }

}
