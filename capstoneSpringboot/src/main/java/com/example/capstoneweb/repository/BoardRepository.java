package com.example.capstoneweb.repository;

import com.example.capstoneweb.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Integer> {

    public final static String SELECT_BOARD_LIST_PAGED = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath," +
            "(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board WHERE board.category = ?1 "
            + "ORDER BY board.board_date DESC LIMIT ?2, ?3 ";

    public final static String SELECT_BOARD_LIST_PAGED2 = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath,(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board  "
            + " WHERE category = ?1 "
            + "ORDER BY board_no DESC ";

    public final static String SELECT_BOARD_SEARCH_ALL = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath," +
            "(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board WHERE (title LIKE %?1% or question LIKE %?1%)";

    public final static String SELECT_BOARD_CATEGORY_COUNT = ""
            + "SELECT "
            + "COUNT(*) "
            + "FROM board WHERE category =?1 ";

    public final static String SELECT_HOT_BOARD = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath,(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board "
            + "where board_like>10 limit 3";

    public final static String SELECT_ALL_HOT_BOARD = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath,(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board "
            + "where board_like>10 ";

    public final static String SELECT_POPULAR_TAG = ""
            + "SELECT TAG , SUM(cnt) AS cnt FROM ("
            + "select tag1 TAG, COUNT(*) cnt from board group by tag1 union all "
            + "select tag2 TAG, COUNT(*) cnt from board group by tag2 union all "
            + "select tag3 TAG, COUNT(*) cnt from board group by tag3 union all "
            + "select tag4 TAG, COUNT(*) cnt from board group by tag4 union all "
            + "select tag5 TAG, COUNT(*) cnt from board group by tag5 ) a "
            + "WHERE TAG IS NOT NULL "
            + "group by TAG "
            + "order by 2 desc "
            + "limit 5 ";

    public final static String SELECT_SIMILAR_TAG = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath,(SELECT COUNT(*) FROM  "
            + "comment WHERE comment.board_no = board.board_no) commentcount,"
            + "(tag1 like '%?1%' or tag1 like'%?2%' or tag1 like'%?3%' or tag1 like'%?4%' or tag1 like'%?5%') " +
            "+ (tag2 like '%?1%' or tag2 like'%?2%' or tag2 like'%?3%' or tag2 like'%?4%' or tag2 like'%?5%') +" +
            "(tag3 like '%?1%' or tag3 like'%?2%' or tag3 like'%?3%' or tag3 like'%?4%' or tag3 like'%?5%') " +
            "+ (tag4 like '%?1%' or tag4 like'%?2%' or tag4 like'%?3%' or tag4 like'%?4%' or tag4 like'%?5%')" +
            "+(tag5 like '%?1%' or tag5 like '%?2%' or tag5 like '%?3%' or tag5 like '%?4%' or tag5 like '%?5%') "
            + "as score "
            + "from board "
            + "where tag1 in (?1,?2,?3,?4,?5) "
            + "or tag2 in (?1,?2,?3,?4,?5) "
            + "or tag3 in (?1,?2,?3,?4,?5) "
            + "or tag4 in (?1,?2,?3,?4,?5)"
            + "or tag5 in (?1,?2,?3,?4,?5) "
            + "order by score desc " +
            "limit 5";

    public final static String GET_CATEGORY_HOT = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath,(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board "
            + "where category =?1 and board_like>10 ";

    public final static String SELECT_RECENT_BOARD = ""
            + "select * from board "
            + "where category = ?1 "
            + "order by board_date desc "
            + "limit 3";
    public final static String SELECT_FINE_BOARD = ""
            + "select count(*) from boardliketo "
            + "where  board_no=?1 and username=?2";

    public final static String SEARCH_TAG = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath,(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board "
            + "where tag1 = ?1 or tag2 = ?1 or tag3 = ?1 or tag4=?1 or tag5=?1";

    public final static String GET_MY_BOARD = ""
            + "SELECT board_no,title,question,board_date,board_like,category,id,tag1,tag2,tag3,tag4,tag5,filepath,(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount "
            + "FROM board "
            + "where id = ?1 "
            + "order by board_no desc ";

    public final static String SELECT_MY_COMMENT = ""
            + "SELECT board.board_no,board.title,board.question, board.board_date, board.board_like,board.category, board.id,board.tag1,board.tag2,board.tag3,board.tag4,board.tag5,board.filepath,(SELECT COUNT(*) FROM  comment WHERE comment.board_no = board.board_no) commentcount " +
            " FROM comment,board "
            + "where comment.comment_id = ?1 && board.board_no = comment.board_no "
            + "group by board.board_no "
            + "order by board.board_no desc ";

    @Query(value = SEARCH_TAG, nativeQuery = true)
    List<Board> SearchTag(final String tag);

    @Query(value = SELECT_FINE_BOARD, nativeQuery = true)
    String findboardLike(
            final Integer comment_no,
            final String username);

    @Query(value = SELECT_BOARD_LIST_PAGED, nativeQuery = true)
    List<Board> findFromTo(
            final String category,
            final Integer objectStartNum,
            final Integer objectEndNum);

    @Query(value = SELECT_BOARD_LIST_PAGED2, nativeQuery = true)
    List<Board> findFromToMobile(
            final String category);


    @Query(value = SELECT_BOARD_SEARCH_ALL, nativeQuery = true)
    List<Board> findKeywordAll(final String keyword);

    @Query(value = SELECT_BOARD_CATEGORY_COUNT, nativeQuery = true)
    Integer findCategoryBoardCount(String category);

    @Query(value = SELECT_HOT_BOARD, nativeQuery = true)
    List<Board> findHotBoard();

    @Query(value = SELECT_ALL_HOT_BOARD, nativeQuery = true)
    List<Board> findAllHotBoard();

    @Query(value = SELECT_POPULAR_TAG, nativeQuery = true)
    List findPopularTag();

    @Query(value = SELECT_SIMILAR_TAG, nativeQuery = true)
    List<Board> findSimilarTag(String tag1, String tag2, String tag3, String tag4, String tag5);

    @Query(value = SELECT_RECENT_BOARD, nativeQuery = true)
    List<Board> findRecentBoard(String category);

    @Query(value = GET_CATEGORY_HOT, nativeQuery = true)
    List<Board> findCategoryHotBoard(String category);

    @Query(value = GET_MY_BOARD, nativeQuery = true)
    List<Board> findMyBoard(String id);

    @Query(value = SELECT_MY_COMMENT, nativeQuery = true)
    List<Board> findMyComment(String id);
}