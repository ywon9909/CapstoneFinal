package com.example.capstoneweb.Controller;

import com.example.capstoneweb.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.service.BoardService;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/board")
    public ResponseEntity<Map> getAllBoards(@RequestParam(value = "p_num") Integer p_num,@RequestParam(value="category") String category) {
        //String cate = null;
        if (p_num == null || p_num <= 0) p_num = 1;
        System.out.println(category);
        if(category==null)
            category="성형외과";

        System.out.println(category);
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
        return boardService.createBoard(board);
    }

    //get board detail
    @GetMapping("/board/{num}")
    public ResponseEntity<Board> getBoardByNum(@PathVariable Integer num){
        return boardService.getBoard(num);
    }
    //get comment
    @GetMapping("/board/comment/{num}")
    public ResponseEntity<Comment> getCommentByNum(
            @PathVariable Integer num){
        return  boardService.getComment(num);
    }
    // update board
    @PutMapping("/board/{no}")
    public ResponseEntity<Board> updateBoardByNo(
            @PathVariable Integer no, @RequestBody Board board){

        return boardService.updateBoard(no, board);
    }
    // delete board
    @DeleteMapping("/board/{no}")
    public ResponseEntity<Map<String, Boolean>> deleteBoardByNo(
            @PathVariable Integer no) {

        return boardService.deleteBoard(no);
    }


}