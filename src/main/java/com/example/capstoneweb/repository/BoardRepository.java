package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {

    public final static String SELECT_BOARD_LIST_PAGED = ""
            + "SELECT *"
            + "FROM board  WHERE 0 < board_no "
            + "and category = ?1 "
            //+ "and category =" +"'"+"정형외과"+"' "
            + "ORDER BY board_no DESC LIMIT ?2, ?3 ";

    public final static String SELECT_BOARD_LIST_PAGED2 = ""
            + "SELECT *"
            + "FROM board  WHERE 0 < board_no "
            + "and category = ?1 "
            + "ORDER BY board_no DESC ";
   /* public final static String SELECT_BOARD_SEARCH_QUESTION=""
            +"SELECT *"
            +"FROM board WHERE question LIKE %?1% ";*/
    public final static String SELECT_BOARD_SEARCH_ALL=""
            +"SELECT * "
            +"FROM board WHERE (title LIKE %?1% or question LIKE %?1%)";

   /* public final static String SELECT_BOARD_SEARCH_TITLE=""
            +"SELECT *"
            +"FROM board WHERE title LIKE %?1% ";*/

    public final static String SELECT_BOARD_CATEGORY_COUNT=""
            +"SELECT "
            +"COUNT(*) "
            +"FROM board WHERE category =?1 ";

    public final static String SELECT_HOT_BOARD=""
            +"SELECT *"
            +"FROM board "
            +"where board_like>10 "
           ;

    public final static String SELECT_POPULAR_TAG=""
            +"SELECT TAG , SUM(cnt) AS cnt FROM ("
            +"select tag1 TAG, COUNT(*) cnt from board group by tag1 union all "
            +"select tag2 TAG, COUNT(*) cnt from board group by tag2 union all "
            +"select tag3 TAG, COUNT(*) cnt from board group by tag3 union all "
            +"select tag4 TAG, COUNT(*) cnt from board group by tag4 union all "
            +"select tag5 TAG, COUNT(*) cnt from board group by tag5 ) a "
            +"WHERE TAG IS NOT NULL "
            +"group by TAG "
            +"order by 2 desc "
            +"limit 5";

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

    /*@Query(value = SELECT_BOARD_SEARCH_TITLE,nativeQuery = true)
    List<Board> findKeywordTitle(final String keyword);

    @Query(value = SELECT_BOARD_SEARCH_QUESTION,nativeQuery = true)
    List<Board> findKeywordQuestion(final String keyword);*/

    @Query(value = SELECT_BOARD_CATEGORY_COUNT,nativeQuery = true)
    Integer findCategoryBoardCount(String category);

    @Query(value = SELECT_HOT_BOARD, nativeQuery = true)
    List<Board> findHotBoard();

    @Query(value = SELECT_POPULAR_TAG, nativeQuery = true)
    List findPopularTag();

}