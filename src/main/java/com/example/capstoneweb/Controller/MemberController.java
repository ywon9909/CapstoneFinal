package com.example.capstoneweb.Controller;

import com.example.capstoneweb.model.Comment;
import com.example.capstoneweb.model.Member;
import com.example.capstoneweb.service.CommentService;
import com.example.capstoneweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MemberController {
    @Autowired
    private MemberService memberService;


    @GetMapping("/board/member/{id}")
    public Member getMemberById(
            @PathVariable(value="id") String id){
        return  memberService.getMember(id);
    }
}