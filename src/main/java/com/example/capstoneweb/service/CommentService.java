package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.Comment;
import com.example.capstoneweb.model.commentliketo;
import com.example.capstoneweb.repository.CommentRepository;
import com.example.capstoneweb.repository.CommentliketoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private CommentliketoRepository commentliketoRepository;

    public List<Comment> getAllComments(){
        return commentRepository.findAll();
    }
    public List<Comment> getComment(Integer num) {

        List<Comment> comment = commentRepository.findCommentBy(num);

        return comment;
    }

    public Comment createComment(Comment comment) {
        return commentRepository.save(comment);
    }

    public void deleteComment(Integer no) {
        Comment comment = commentRepository.findById(no).orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));
        commentRepository.delete(comment);
        // Map<String, Boolean> response = new HashMap<>();
        //response.put("Deleted Board Data by id : [" + no + "]", Boolean.TRUE);

    }

    public void updateComment(Integer no, Comment updateComment) {
        Comment comment = commentRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));
        comment.setComment_like(updateComment.getComment_like());


        commentRepository.save(comment);
    }



    public commentliketo createCommentlike(commentliketo commentliketos) {
        return commentliketoRepository.save(commentliketos);
    }

    public String getCommentliketo(Integer num,String username) {
        return commentRepository.findcommentLike(num,username);
    }


}