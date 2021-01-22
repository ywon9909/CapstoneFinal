package com.example.capstoneweb.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.service.BoardService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping("/board")
    public List<Board> getAllBoards(){
        System.out.println(boardService.getAllBoard());
        return boardService.getAllBoard();
    }
    @PostMapping("/board")
    public Board createBoard(@RequestBody Board board) {
        return boardService.createBoard(board);
    }
    @GetMapping("/board/{num}")
    public ResponseEntity<Board> getBoardByNum(
            @PathVariable Integer num){
        return boardService.getBoard(num);
    }
    // update board
    @PutMapping("/board/{no}")
    public ResponseEntity<Board> updateBoardByNo(
            @PathVariable Integer no, @RequestBody Board board){

        return boardService.updateBoard(no, board);
    }



}
