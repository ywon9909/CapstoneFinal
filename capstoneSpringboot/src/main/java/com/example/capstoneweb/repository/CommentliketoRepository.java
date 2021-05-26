package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.Comment;
import com.example.capstoneweb.model.commentliketo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentliketoRepository extends JpaRepository<commentliketo, Integer> {


}
