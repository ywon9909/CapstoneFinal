import React, { Component } from 'react';

class LoginComponent extends Component {
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