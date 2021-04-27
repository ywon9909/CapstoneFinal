import axios from 'axios';
const MEMBER_API_BASE_URL = "http://localhost:8080/api/"; 

class MemberService{
    getMembers(){
        return axios.get(MEMBER_API_BASE_URL+"members");
    }
    getOneMember(id){
        return axios.get(MEMBER_API_BASE_URL+"member/"+id);
    }
    onLogin(){
        return axios.post(MEMBER_API_BASE_URL);
    }
}
export default new MemberService();