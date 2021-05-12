import axios from 'axios';
const MEMBER_API_BASE_URL = "http://localhost:8080/api/"; 

class MemberService{
    getMembers(){
        return axios.get(MEMBER_API_BASE_URL+"members");
    }
    getOneMember(id){
        return axios.get(MEMBER_API_BASE_URL+"member/"+id);
    }
  
    deleteMember(id){
        return axios.delete(MEMBER_API_BASE_URL+"member/"+id);
    }
    updateMember(changePassword,id){
        return axios.put(MEMBER_API_BASE_URL+"member/"+changePassword+"/"+id);
    }
}
export default new MemberService();