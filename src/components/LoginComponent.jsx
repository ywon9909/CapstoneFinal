import React, { Component } from 'react';
import MemberService from '../service/MemberService';
class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            pw:"",
          
            member:[]
        }
        
        this.handleIdChange = this.handleIdChange.bind(this)
        
        this.handlePw = this.handlePw.bind(this)
    }
    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    }
    handlePw = (event)=>{
        
        this.setState({
            pw : event.target.value
        })
    }
    gotoHome(){
        console.log("id="+this.state.id)
        MemberService.getOneMember(this.state.id).then((res)=>{
            console.log("member = " +res.data)
            this.setState({
                member:res.data
            });
        });
        
        console.log("auth = "+this.state.member.authorities);
        
        
        //this.props.onLogin();
        if(this.state.id==this.state.member.id &&this.state.pw==this.state.member.pw){
            window.sessionStorage.setItem('id', this.state.id);
            window.sessionStorage.setItem('pw', this.state.pw);
            window.sessionStorage.setItem('login',"login");
            return this.props.history.push('/');
        }
    }   
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                        <div className="call-action d-lg-flex justify-content-between align-items-center">
                            <div className="action-content text-center">
                                <h3 className="action-title">
                                    Login
                                </h3>
                                <div className="about-content mt-40">
                                <form action="/" method="post">
                               

                                    <div className="about-form">
                                       
                                            <input type="text" placeholder="ID" name="id" value={this.state.id} onChange={this.handleIdChange}></input>

                                            <input type="text" placeholder="PW" name="pw" value={this.state.pw} onChange={this.handlePw}></input>
                                       

                                    </div>
                                    <div className="container text-center">
                                        <div className="row">
                                            <button type="submit" className="main-btn" style={{marginLeft:"150px"}} onClick={()=>this.gotoHome(this.state.id)}>
                                                Login
                                            </button>
                                            <button className="main-btn">
                                                회원가입
                                            </button>
                                            <button className="main-btn">
                                                ID/PW 찾기
                                            </button>
                                        </div>

                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default LoginComponent;