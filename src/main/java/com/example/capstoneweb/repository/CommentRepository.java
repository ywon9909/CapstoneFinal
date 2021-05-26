package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CommentRepository extends JpaRepository<Comment, Integer> {

    public final static String SELECT_COMMENT = ""
            + "SELECT DISTINCT "
            + "comment_no,"
            + "answer,"
            + "comment_date, "
            + "comment_like, "
            + "comment_id, "
            + "comment.board_no, comment.board_id "
            + "FROM comment, board where comment.board_no=?1 ";

    public final static String SELECT_FINE_COMMENT = ""
            + "select count(*) from commentliketo "
            + "where  comment_no=?1 and username=?2";


    //  WHERE board_no=1
    @Query(value = SELECT_COMMENT, nativeQuery = true)
    List<Comment> findCommentBy(Integer num);

    @Query(value = SELECT_FINE_COMMENT, nativeQuery = true)
    String findcommentLike(
            final Integer comment_no,
            final String username);

}