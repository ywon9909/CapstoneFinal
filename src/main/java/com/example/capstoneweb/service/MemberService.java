package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.Member;
import com.example.capstoneweb.repository.CommentRepository;
import com.example.capstoneweb.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService implements UserDetailsService {
    @Autowired
    private MemberRepository memberRepository;

    //private PasswordEncoder passwordEncoder;

    public Member getMember(String id){
        Member member = memberRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Not exist Board Data by no : ["+id+"]"));

        return member;
    }
    public List<Member> findAll(){
        List<Member> members = new ArrayList<>();
        memberRepository.findAll().forEach(e -> members.add(e));
        return members;
    }
    public String onLogin(){
        return "login";
    }

    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        Member member = memberRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Not exist Board Data by no : ["+id+"]"));

        return User.builder()
                .username(member.getUsername())
                .password(member.getPassword())
                .roles("USER")
                .build();
        /*List<GrantedAuthority> authorities = new ArrayList<>();

        if(member.getRole().equals("ROLE_USER"))
            authorities.add(new SimpleGrantedAuthority("USER"));
        else if(member.getRole().equals("ROLE_ADMIN"))
            authorities.add(new SimpleGrantedAuthority("ADMIN"));
        */

    }
    public Member createMemeber(Member member){
        member.encodePassword();
        return memberRepository.save(member);
    }
}