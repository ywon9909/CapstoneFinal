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
                                    <div className="about-form">
                                        <form action="#">
                                            <input type="text" placeholder="ID"></input>

                                            <input type="text" placeholder="PW"></input>
                                        </form>

                                    </div>
                                    <div className="container text-center">
                                        <div className="row ">
                                            <button className="main-btn" style={{marginLeft:"150px"}}>
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