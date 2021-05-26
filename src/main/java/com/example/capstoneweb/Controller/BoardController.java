package com.example.capstoneweb.Controller;


import com.example.capstoneweb.model.boardliketo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.service.BoardService;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/boards")
    public List<Board> getAllBoards() {
        return boardService.getAllBoard();
    }

    //getAllBoard - web
    @GetMapping("/board")
    public ResponseEntity<Map> getAllBoards(@RequestParam(value = "p_num") Integer p_num, @RequestParam(value = "category") String category) {
        if (p_num == null || p_num <= 0) p_num = 1;

        //기본값
        if (category == null)
            category = "성형외과";

        return boardService.getPagingBoard(category, p_num);
    }

    //getAllBoard - mobile
    @GetMapping("/mobile/board")
    public List<Board> getAllBoard(@RequestParam(value = "category") String category) {
        return boardService.getPagingBoard2(category);
    }

    //create board
    @PostMapping("/board")
    public Board createBoard(@RequestBody Board board) {
        boardService.createBoard(board);
        //tagService.createTag(board.getBoard_no(),tag);
        return boardService.createBoard(board);
    }

    //get board detail
    @GetMapping("/board/{num}")
    public ResponseEntity<Board> getBoardByNum(@PathVariable Integer num) {
        return boardService.getBoard(num);
    }

    // update board
    @PutMapping("/board/{no}")
    public void updateBoardByNo(
            @PathVariable Integer no, @RequestBody Board board) {
        boardService.updateBoard(no, board);
    }

    // delete board
    @DeleteMapping("/board/{no}")
    public void deleteBoardByNo(
            @PathVariable Integer no) {
        boardService.deleteBoard(no);
    }

    //search board
    @GetMapping("/board/search/{keyword}")
    public List<Board> getSearchBoards(@PathVariable(value = "keyword", required = false) String keyword) {

        if (keyword == null)
            keyword = "help";
        return boardService.getsearchBoard(keyword);
    }

    //내가 댓글 쓴 글 가져오기
    @GetMapping("/board/mycomment/{id}")
    public List<Board> getMyComment(@PathVariable String id) {
        return boardService.getMyComment(id); //comment
    }

    //내가 쓴 글 가져오기
    @GetMapping("/board/my/{id}") //id
    public List<Board> getMyBoard(@PathVariable String id) {
        return boardService.getMyBoard(id);
    }

    //hot게시물 3개 가져오기
    @GetMapping("/board/hot")
    public List<Board> getHotBoard() {
        return boardService.getHotBoard();
    }

    @GetMapping("/board/allhot")
    public List<Board> getAllHotBoard() {
        return boardService.getAllHotBoard();
    }

    //category별 hot 게시물
    @GetMapping("/board/allhot/{category}")
    public List<Board> getCategoryHotBoard(@PathVariable String category) {
        return boardService.getCategoryHotBoard(category);
    }

    @GetMapping("/board/ptag")
    public List getPopularTag() {
        return boardService.getPopularTag();
    }

    //연관질문
    @GetMapping("/board/similartag/{tag1}/{tag2}/{tag3}/{tag4}/{tag5}")
    public List<Board> getSimilarTag(@PathVariable String tag1, @PathVariable String tag2, @PathVariable String tag3, @PathVariable String tag4, @PathVariable String tag5) {
        return boardService.getSimilarTag(tag1, tag2, tag3, tag4, tag5);
    }

    @GetMapping("/board/recentboard/{category}")
    public List<Board> getRecentBoard(@PathVariable String category) {
        return boardService.getRecentBoard(category);
    }

    //tag별 게시물
    @GetMapping("/board/searchtag/{tag}")
    public List<Board> getsearchtag(@PathVariable String tag) {
        return boardService.SearchTag(tag);
    }


    //좋아요 했는지 확인 - board
    @GetMapping("/board/boardlike/{num}/{username}")
    public String getboardliketoByNum(
            @PathVariable Integer num, @PathVariable String username) {

        return boardService.getboardliketo(num, username);
    }

    //좋아요 - board
    @PostMapping("/board/boardlike")
    public boardliketo createboardlike(@RequestBody boardliketo boardliketo) {
        return boardService.createboardlike(boardliketo);
    }


}