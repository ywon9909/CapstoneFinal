package com.example.capstoneweb.Controller;

import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.Comment;
import com.example.capstoneweb.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class CommentController {
    @Autowired
    private CommentService commentService;

    //create comment
    @PostMapping("/board/comment")
    public Comment createComment(@RequestBody Comment comment){
        return commentService.createComment(comment);
    }
    //get comment
    @GetMapping("/board/comment/{num}")
    public List<Comment> getCommentByNum(
            @PathVariable Integer num){
        return  commentService.getComment(num);
    }
    // delete comment
    @DeleteMapping("/board/comment/{no}")
    public void deleteCommentByNo(
            @PathVariable Integer no) {

        commentService.deleteComment(no);
    }
    // update comment
    @PutMapping("/board/comment/{no}")
    public void updateCommentByNo(
            @PathVariable Integer no, @RequestBody Comment comment){
        commentService.updateComment(no,comment);

    }
}