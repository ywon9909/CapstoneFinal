package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    public List<Board> getAllBoard(){
        return boardRepository.findAll();
    }
    public Board createBoard(Board board){
        return boardRepository.save(board);
    }

    public ResponseEntity<Board> getBoard(Integer num){
        Board board = boardRepository.findById(num).orElseThrow(()-> new ResourceNotFoundException("Not exist Board Data by no : ["+num+"]"));

        return ResponseEntity.ok(board);
    }
}
