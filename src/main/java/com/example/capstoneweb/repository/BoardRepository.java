package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {

    public final static String SELECT_BOARD_LIST_PAGED = ""
            + "SELECT  "
            + "Board.BoardNo,"
            + "Board.Title,"
            + "Board.Question, "
            + "Board.Date, "
            + "Board.Like, "
            + "Board.Category, "
            + "Board.ID "
            + "FROM Board  WHERE 0 < Board.BoardNo "
            + "ORDER BY Board.BoardNo DESC LIMIT ?1, ?2 ";

    @Query(value = SELECT_BOARD_LIST_PAGED, nativeQuery = true)
    List<Board> findFromTo(
            final Integer objectStartNum,
            final Integer objectEndNum);


}