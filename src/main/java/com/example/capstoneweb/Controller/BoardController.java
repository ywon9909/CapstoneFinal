package com.example.capstoneweb.Controller;


import com.example.capstoneweb.model.boardliketo;
import com.example.capstoneweb.model.commentliketo;
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
    public  List<Board>getAllBoards(){
        return boardService.getAllBoard();
    }
    @GetMapping("/board")
    public ResponseEntity<Map> getAllBoards(@RequestParam(value = "p_num") Integer p_num,@RequestParam(value="category") String category) {
        //String cate = null;
        if (p_num == null || p_num <= 0) p_num = 1;

        if(category==null)
            category="성형외과";

        //System.out.println(category);
        // System.out.println(p_num);
        return boardService.getPagingBoard(category,p_num);
    }

    @GetMapping("/mobile/board")
    public List<Board>getAllBoard(@RequestParam(value="category") String category){
        return boardService.getPagingBoard2(category);
    }
    //create board
    @PostMapping("/board")
    public Board createBoard(@RequestBody Board board){
        boardService.createBoard(board);
        //tagService.createTag(board.getBoard_no(),tag);
        return  boardService.createBoard(board);
    }

    //get board detail
    @GetMapping("/board/{num}")
    public ResponseEntity<Board> getBoardByNum(@PathVariable Integer num){
        return boardService.getBoard(num);
    }

    // update board
    @PutMapping("/board/{no}")
    public void updateBoardByNo(
            @PathVariable Integer no, @RequestBody Board board){

        boardService.updateBoard(no, board);
    }
    // delete board
    @DeleteMapping("/board/{no}")
    public void deleteBoardByNo(
            @PathVariable Integer no) {
        boardService.deleteBoard(no);
    }
    @GetMapping("/board/search/{keyword}")
    public List<Board> getSearchBoards(@PathVariable(value="keyword", required=false) String keyword){
        //System.out.println(searchType);
        //System.out.println(keyword);
        if(keyword==null)
            keyword="help";
        return boardService.getsearchBoard(keyword);
    }
    @GetMapping("/board/hot")
    public List<Board> getHotBoard(){
        return  boardService.getHotBoard();
    }
    @GetMapping("/board/ptag")
    public List getPopularTag(){
        return boardService.getPopularTag();
    }
    @GetMapping("/board/similartag/{tag1}/{tag2}/{tag3}/{tag4}/{tag5}")
    public List<Board> getSimilarTag(@PathVariable String tag1,@PathVariable String tag2,@PathVariable String tag3,@PathVariable String tag4,@PathVariable String tag5){

        return boardService.getSimilarTag(tag1,tag2,tag3,tag4,tag5);
    }
    @GetMapping("/board/recentboard/{category}")
    public List<Board> getRecentBoard(@PathVariable String category){
        return boardService.getRecentBoard(category);
    }


    @GetMapping("/board/boardlike/{num}/{username}")
    public String getboardliketoByNum(
            @PathVariable Integer num,@PathVariable String username){

        return  boardService.getboardliketo(num,username);
    }
    @PostMapping("/board/boardlike")
    public boardliketo createboardlike(@RequestBody boardliketo boardliketo){
        return boardService.createboardlike(boardliketo);
    }
}