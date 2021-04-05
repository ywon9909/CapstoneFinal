import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8080/api/board"; 

class BoardService {


    getBoards(category,p_num) {
        return axios.get(BOARD_API_BASE_URL+"?p_num="+p_num+"&category="+category);
    }

    createBoard(board){
        return axios.post(BOARD_API_BASE_URL,board);
    }
    createComment(comment){
        return axios.post(BOARD_API_BASE_URL+"/comment",comment);
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
   

    updateBoard(num, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + num, board);
    }
    deleteBoard(num) {
        return axios.delete(BOARD_API_BASE_URL + "/" + num);
    }
    searchBoard(keyword){
        return axios.get(BOARD_API_BASE_URL+"/search/"+keyword);

    }
    updateComment(no, comment) {
        return axios.put(BOARD_API_BASE_URL + "/comment/"+no ,comment);
    }
    getMemberById(id){
        return axios.get(BOARD_API_BASE_URL+"/member/"+id);

    }
   getHotBoard(){
       return axios.get(BOARD_API_BASE_URL+"/hot");
   }
   getPopularTag(){
    return axios.get(BOARD_API_BASE_URL+"/ptag");
    }
    getSimilarTag(tag1,tag2,tag3,tag4,tag5){
        return axios.get(BOARD_API_BASE_URL+"/similartag/"+tag1+"/"+tag2+"/"+tag3+"/"+tag4+"/"+tag5)
    }
    getRecentBoard(category){
        return axios.get(BOARD_API_BASE_URL+"/recentboard/"+category)
    }
}

export default new BoardService();