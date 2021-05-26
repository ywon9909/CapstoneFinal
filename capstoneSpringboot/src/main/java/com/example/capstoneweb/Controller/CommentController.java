package com.example.capstoneweb.Controller;

import com.example.capstoneweb.model.Comment;
import com.example.capstoneweb.model.commentliketo;
import com.example.capstoneweb.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class CommentController {
    @Autowired
    private CommentService commentService;

    //getallcomments
    @GetMapping("/board/comments")
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    //create comment
    @PostMapping("/board/comment")
    public Comment createComment(@RequestBody Comment comment) {
        return commentService.createComment(comment);
    }

    //get comment by board_no
    @GetMapping("/board/comment/{num}")
    public List<Comment> getCommentByNum(
            @PathVariable Integer num) {
        return commentService.getComment(num);
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
            @PathVariable Integer no, @RequestBody Comment comment) {
        commentService.updateComment(no, comment);

    }

    //comment 좋아요 확인
    @GetMapping("/board/commentlike/{num}/{username}")
    public String getCommentliketoByNum(
            @PathVariable Integer num, @PathVariable String username) {

        return commentService.getCommentliketo(num, username);
    }

    //comment 좋아요
    @PostMapping("/board/commentlike")
    public commentliketo createCommentlike(@RequestBody commentliketo commentliketo) {
        return commentService.createCommentlike(commentliketo);
    }

}