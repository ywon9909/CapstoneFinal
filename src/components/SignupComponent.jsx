import React, { Component } from 'react';

class SignupComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
           id:null,
           pw:null,
           nickname:null,
           phone:null,
           role:'ROLE_USER'
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
    handleName = (event)=>{
        
        this.setState({
            nickname : event.target.value
        })
    }
    handlePH = (event)=>{
        
        this.setState({
            phone : event.target.value
        })
    }

    gotoHome(){
            return this.props.history.push('/login');
        
    } 
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 ">
                        <div className="call-action d-lg-flex justify-content-between align-items-center">
                            <div className="action-content text-center">
                                <h3 className="action-title">
                                    회원가입
                                </h3>
                                <div className="about-content mt-40">
                                <form action="/" method="post">
                               

                                    <div className="about-form">
                                       
                          
                                      <input type="text" placeholder="ID" name="id" 
                                       onChange={this.handleIdChange} ></input>

                                           <input type="text" placeholder="PW" name="pw" onChange={this.handlePw}></input>
                                           <input type="text" placeholder="name" name="nickname" onChange={this.handleName}></input>
                                            <input type="text" placeholder="phone" name="phonenumber"  onChange={this.handlePH}></input>
                                    </div>
                                    <div className="container text-center">
                                        <div className="row">
                                        <button type="submit" className="main-btn" style={{display: "inline",position: "absolute", right: "10%"}} onClick={()=>this.gotoHome()}>
                                        
                                                가입
                                            </button>
                                      
                                            <button type="submit" className="main-btn"  style={{display: "inline",position: "absolute", right: "0%"}} onClick={()=>this.gotoHome()}>
                                                취소
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

export default SignupComponent;