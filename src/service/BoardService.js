import axios from 'axios';


const BOARD_API_BASE_URL = "http://localhost:8080/api/board"; 

class BoardService {

    getAllBoards(){
      return axios.get(BOARD_API_BASE_URL+"s",{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    }
    getAllComments(){
      return axios.get(BOARD_API_BASE_URL+"/comments",{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    }
    getBoards(category,p_num) {
        return axios.get(BOARD_API_BASE_URL+"?p_num="+p_num+"&category="+category,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }


    createComment(comment){
        return axios.post(BOARD_API_BASE_URL+"/comment",comment,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    deleteComment(num) {
        return axios.delete(BOARD_API_BASE_URL + "/comment/" + num,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    getOneBoard(num){
        return axios.get(BOARD_API_BASE_URL+"/"+num,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    getOneComment(num){
        return axios.get(BOARD_API_BASE_URL+"/comment/"+num,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }

    updateBoard(num, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + num, board,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    deleteBoard(num) {
        return axios.delete(BOARD_API_BASE_URL + "/" + num,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    searchBoard(keyword){
        return axios.get(BOARD_API_BASE_URL+"/search/"+keyword,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    updateComment(no, comment) {
        return axios.put(BOARD_API_BASE_URL + "/comment/"+no ,comment,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    getMemberById(id){
        return axios.get(BOARD_API_BASE_URL+"/member/"+id,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
   getHotBoard(){
       return axios.get(BOARD_API_BASE_URL+"/hot",{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
   }
   getPopularTag(){
    return axios.get(BOARD_API_BASE_URL+"/ptag",{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
   }
    getSimilarTag(tag1,tag2,tag3,tag4,tag5){
        return axios.get(BOARD_API_BASE_URL+"/similartag/"+tag1+"/"+tag2+"/"+tag3+"/"+tag4+"/"+tag5,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    getRecentBoard(category){
        return axios.get(BOARD_API_BASE_URL+"/recentboard/"+category,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }



  
      fetchToken(token) {
        localStorage.setItem("token", token);
        console.log(" token is " + token);
      }


      getUserName( ){
        return axios.get(BOARD_API_BASE_URL+"/authenticate", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
    
       createBoard(board){
        return axios.post(BOARD_API_BASE_URL,board,{
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
      }
       getCommentliketoByNum(num,username) {
        return axios.get(BOARD_API_BASE_URL+"/commentlike/"+num+"/"+username,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
       createcommentlikt(commentliketo){ return axios.post(BOARD_API_BASE_URL+"/commentlike",commentliketo,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
       }
       getboardliketoByNum(num,username) {
        return axios.get(BOARD_API_BASE_URL+"/boardlike/"+num+"/"+username,{
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
       }
       createboardlikt(boardliketo){ return axios.post(BOARD_API_BASE_URL+"/boardlike",boardliketo,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
       }
}

export default new BoardService();