package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.Member;
import com.example.capstoneweb.repository.CommentRepository;
import com.example.capstoneweb.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public Member getMember(String id){
        Member member = memberRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Not exist Board Data by no : ["+id+"]"));

        return member;
    }

}