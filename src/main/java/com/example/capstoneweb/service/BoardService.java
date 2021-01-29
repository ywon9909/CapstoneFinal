package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.Comment;
import com.example.capstoneweb.repository.BoardRepository;
import com.example.capstoneweb.repository.CommentRepository;
import com.example.capstoneweb.util.PagingUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private CommentRepository commentRepository;

    public int findAllCount() {
        return (int) boardRepository.count();
    }
    public List<Board> getAllBoard(){
        return boardRepository.findAll();
    }
    public Board createBoard(Board board){
        return boardRepository.save(board);
    }
    //get board detail
    public ResponseEntity<Board> getBoard(Integer num){
        Board board = boardRepository.findById(num).orElseThrow(()-> new ResourceNotFoundException("Not exist Board Data by no : ["+num+"]"));

        return ResponseEntity.ok(board);
    }
    public ResponseEntity<Comment> getComment(Integer num){
        Comment comment=commentRepository.findCommentBy(num);

        return ResponseEntity.ok(comment);
    }

    public ResponseEntity<Map> getPagingBoard(String category,Integer p_num) {
        Map result = null;

        PagingUtil pu = new PagingUtil(category,p_num, 5, 5); // ($1:표시할 현재 페이지, $2:한페이지에 표시할 글 수, $3:한 페이지에 표시할 페이지 버튼의 수 )
        List<Board> list = boardRepository.findFromTo(category,pu.getObjectStartNum(), pu.getObjectCountPerPage());//
        pu.setObjectCountTotal(findAllCount());
        pu.setCalcForPaging();


        //System.out.println("p_num : "+p_num);
        //System.out.println(pu.toString());

        if (list == null || list.size() == 0) {
            return null;
        }

        result = new HashMap<>();
        result.put("category",category);
        result.put("pagingData", pu);
        result.put("list", list);

        return ResponseEntity.ok(result);
    }


    public List<Board> getPagingBoard2(String category) {

        List<Board> list = boardRepository.findFromToMobile(category);//


        return boardRepository.findFromToMobile(category);
    }

    public ResponseEntity<Board> updateBoard(
            Integer no, Board updatedBoard) {
        Board board = boardRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));
        board.setTitle(updatedBoard.getTitle());
        board.setQuestion(updatedBoard.getQuestion());
        Board endUpdatedBoard = boardRepository.save(board);
        return ResponseEntity.ok(endUpdatedBoard);
    }
    public ResponseEntity<Map<String, Boolean>> deleteBoard( Integer no) {
        Board board = boardRepository.findById(no).orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));
        boardRepository.delete(board);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted Board Data by id : [" + no + "]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}