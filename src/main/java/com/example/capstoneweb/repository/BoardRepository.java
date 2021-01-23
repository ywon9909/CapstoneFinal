package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {

    public final static String SELECT_BOARD_LIST_PAGED = ""
            + "SELECT "
            + "num,"
            + "title,"
            + "question,"
            + "answer1,"
            + "answer2 "
            + "FROM kin WHERE 2 < num "
            + "ORDER BY num DESC LIMIT ?1, ?2";


    @Query(value = SELECT_BOARD_LIST_PAGED, nativeQuery = true)
    List<Board> findFromTo(
            final Integer objectStartNum,
            final Integer objectEndNum);


}