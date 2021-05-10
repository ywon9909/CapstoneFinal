import React, { Component } from 'react';
import BoardService from '../service/BoardService';
class MyPageComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: ' ',
           password:'',
           isDeveloperModalOn:false,
           
        }

       
    }
    componentDidMount() {
        BoardService. getUserName( ).then ((res)=>{
            console.log("id is "+res.data)
            this.setState({
                id: res.data
                
            });
        });
       
    }
    handleDeveloperModal = (e) =>{
        this.setState({
            isDeveloperModalOn:!this.state.isDeveloperModalOn,
        })
    }

    
    render() {
        return (
            <div>
                <div className="text-center">
                    <h2>My Page</h2>
                    <br/>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        


                            <div className="col-lg-5 text-center" >
                                <div className="single-features text-center mt-30" style={{height:"200px"}}>
                                    <div className="department-content text-center">
                                        <h4 className="action-title">
                                            내 정보
                                        </h4>
                                        <p className="text">ID {this.state.id}</p>
                                    
                                        <button className="main-btn">로그아웃</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="single-features text-center mt-30" style={{height:"200px"}}>
                                    <div className="department-content text-center">
                                        <h4 className="action-title">계정</h4>
                                        <p className="text">전문가 인증</p>
                                        <p className="text">비밀번호 변경</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="single-features text-center mt-30" style={{height:"200px"}}>
                                    <div className="department-content text-center">
                                        <h4 className="action-title">커뮤니티
                                    </h4>
                                        <p className="text">커뮤니티 이용규칙</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="single-features text-center mt-30" style={{height:"200px"}}>
                                    <div className="department-content text-center">
                                        <h4 className="action-title">이용안내
                                    </h4>
                                        
                                        <p className="text">서비스 이용약관</p>
                                        <p className="text">개인정보 처리방침</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="single-features text-center mt-30" style={{height:"200px"}}>
                                    <div className="department-content text-center">
                                        <h4 className="action-title">기타
                                    </h4>
                                        <p className="text">정보동의 설정</p>
                                        <p className="text">회원 탈퇴</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="single-features text-center mt-30" style={{height:"200px"}}>
                                    <div className="department-content text-center">
                                        <h4 className="action-title">개발자 정보
                                        </h4>
                                        <p className="text" onClick={this.handleDeveloperModal}>개발자</p>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                

            </div >
        );
    }
}

export default MyPageComponent;