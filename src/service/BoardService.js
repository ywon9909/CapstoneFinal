import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8080/api/board"; 

class BoardService {


    getBoards(category,p_num) {
        return axios.get(BOARD_API_BASE_URL+"?p_num="+p_num+"&category="+category);
    }

    createBoard(board,tag){
        return axios.post(BOARD_API_BASE_URL,board,tag);
    }
    createComment(comment){
        return axios.post(BOARD_API_BASE_URL+"/comment",comment);
    }
    createTag(tag){
        return axios.post(BOARD_API_BASE_URL+"/tag",tag);
    }
    deleteComment(num) {
        return axios.delete(BOARD_API_BASE_URL + "/comment/" + num);
    }

    getOneBoard(num){
        return axios.get(BOARD_API_BASE_URL+"/"+num);
    }
    getOneComment(num){
        return axios.get(BOARD_API_BASE_URL+"/comment/"+num);
    }
   
    updateTag(num, tag) {
        return axios.put(BOARD_API_BASE_URL + "/tag/" + num, tag);
    }
    updateBoard(num, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + num, board);
    }
    deleteBoard(num) {
        return axios.delete(BOARD_API_BASE_URL + "/" + num);
    }
    searchBoard(keyword,searchType){
        return axios.get(BOARD_API_BASE_URL+"/search/"+keyword+"/"+searchType);

    }
    getTagByNum(num){
        return axios.get(BOARD_API_BASE_URL+"/tag/"+num);

    }
}

export default new BoardService();