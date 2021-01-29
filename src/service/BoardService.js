import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8080/api/board"; 

class BoardService {


    getBoards(category,p_num) {
        return axios.get(BOARD_API_BASE_URL+"?p_num="+p_num+"&category="+category);
    }

    createBoard(board){
        return axios.post(BOARD_API_BASE_URL,board);
    }

    getOneBoard(num){
        return axios.get(BOARD_API_BASE_URL+"/"+num);
    }
    getOneComment(num){
        return axios.get(BOARD_API_BASE_URL+"/comment/"+num);
    }
   
    updateBoard(num, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + num, board);
    }

    deleteBoard(num) {
        return axios.delete(BOARD_API_BASE_URL + "/" + num);
    }

}

export default new BoardService();