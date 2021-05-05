package com.example.capstoneweb.service;

import com.example.capstoneweb.exception.ResourceNotFoundException;
import com.example.capstoneweb.model.Board;
import com.example.capstoneweb.model.boardliketo;
import com.example.capstoneweb.model.commentliketo;
import com.example.capstoneweb.repository.BoardRepository;
import com.example.capstoneweb.repository.boardliketoRepository;
import com.example.capstoneweb.util.PagingUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
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
    private boardliketoRepository boardliketoRepository;

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


    public ResponseEntity<Map> getPagingBoard(String category,Integer p_num) {
        Map result = null;

        PagingUtil pu = new PagingUtil(category,p_num, 5, 10); // ($1:표시할 현재 페이지, $2:한페이지에 표시할 글 수, $3:한 페이지에 표시할 페이지 버튼의 수 )
        List<Board> list = boardRepository.findFromTo(category,pu.getObjectStartNum(), pu.getObjectCountPerPage());

        pu.setObjectCountTotal(boardRepository.findCategoryBoardCount(category));//findAllCount()=전체 글 수


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

    public void updateBoard(
            Integer no, Board updatedBoard) {
        Board board = boardRepository.findById(no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));
        board.setTitle(updatedBoard.getTitle());
        board.setQuestion(updatedBoard.getQuestion());
        board.setBoard_like(updatedBoard.getBoard_like());
        board.setTag1(updatedBoard.getTag1());
        board.setTag2(updatedBoard.getTag2());
        board.setTag3(updatedBoard.getTag3());
        board.setTag4(updatedBoard.getTag4());
        board.setTag5(updatedBoard.getTag5());

        boardRepository.save(board);
        //return ResponseEntity.ok(endUpdatedBoard);
    }
    public void deleteBoard( Integer no) {
        Board board = boardRepository.findById(no).orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + no + "]"));

        boardRepository.delete(board);
        // Map<String, Boolean> response = new HashMap<>();
        // response.put("Deleted Board Data by id : [" + no + "]", Boolean.TRUE);

    }
    public List<Board> getsearchBoard(String keyword) {

            return boardRepository.findKeywordAll(keyword);

    }
    public List<Board> getHotBoard(){
        return boardRepository.findHotBoard();
    }
    public List getPopularTag(){
        return boardRepository.findPopularTag();
    }
    public List<Board> getSimilarTag(String tag1,String tag2,String tag3,String tag4,String tag5){
        return boardRepository.findSimilarTag(tag1,tag2,tag3,tag4,tag5);
    }
    public List<Board> getRecentBoard(String category){
        return boardRepository.findRecentBoard(category);
    }

    public boardliketo createboardlike(boardliketo boardliketo) {
        return boardliketoRepository.save(boardliketo);
    }

    public String getboardliketo(Integer num,String username) {
        return boardRepository.findboardLike(num,username);
    }
}