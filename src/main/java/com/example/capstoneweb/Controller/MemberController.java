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

    @GetMapping("/member/login")
    public List<Member> getMembers(){
        System.out.println("api/login");
        return memberService.findAll();
    }

    @GetMapping("/members")
    public List<Member> getAllMembers(){
        return memberService.findAll();
    }
    @GetMapping("/member/{id}")
    public Member getMemberById(
            @PathVariable(value="id") String id){
        return  memberService.getMember(id);
    }
    @GetMapping("/login")
    public String onLogin(){
        return memberService.onLogin();
    }
    @PostMapping("/member/{id}/{password}")
    public String login(){
        return "redirect:http://localhost:3000/login";
    }

}