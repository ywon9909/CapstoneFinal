package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {

    public final static String SELECT_BOARD_LIST_PAGED = ""
            + "SELECT  "
            + "board_no,"
            + "title,"
            + "question, "
            + "board_date,"
            + "board_like, "
            + "category, "
            + "id "
            + "FROM board  WHERE 0 < board_no "
            + "and category = ?1 "
            //+ "and category =" +"'"+"정형외과"+"' "
            + "ORDER BY board_no DESC LIMIT ?2, ?3 ";

    public final static String SELECT_BOARD_LIST_PAGED2 = ""
            + "SELECT  "
            + "board_no,"
            + "title,"
            + "question, "
            + "board_date,"
            + "board_like, "
            + "category, "
            + "id "
            + "FROM board  WHERE 0 < board_no "
            + "and category = ?1 "
            + "ORDER BY board_no DESC ";
    public final static String SELECT_BOARD_SEARCH_QUESTION=""
            +"SELECT "
            +"board_no, "
            + "title,"
            + "question, "
            + "board_date,"
            + "board_like, "
            + "category, "
            + "id "
            +"FROM board WHERE question LIKE %?1% ";
    public final static String SELECT_BOARD_SEARCH_ALL=""
            +"SELECT "
            +"board_no, "
            + "title,"
            + "question, "
            + "board_date,"
            + "board_like, "
            + "category, "
            + "id "
            +"FROM board WHERE title,question LIKE %?1% ";
    public final static String SELECT_BOARD_SEARCH_TITLE=""
            +"SELECT "
            +"board_no, "
            + "title,"
            + "question, "
            + "board_date,"
            + "board_like, "
            + "category, "
            + "id "
            +"FROM board WHERE title LIKE %?1% ";

    @Query(value = SELECT_BOARD_LIST_PAGED, nativeQuery = true)
    List<Board> findFromTo(
            final String category,
            final Integer objectStartNum,
            final Integer objectEndNum);

    @Query(value = SELECT_BOARD_LIST_PAGED2 , nativeQuery = true)
    List<Board> findFromToMobile(
            final String category);


    @Query(value = SELECT_BOARD_SEARCH_ALL,nativeQuery = true)
    List<Board> findKeywordAll(final String keyword);

    @Query(value = SELECT_BOARD_SEARCH_TITLE,nativeQuery = true)
    List<Board> findKeywordTitle(final String keyword);

    @Query(value = SELECT_BOARD_SEARCH_QUESTION,nativeQuery = true)
    List<Board> findKeywordQuestion(final String keyword);
}