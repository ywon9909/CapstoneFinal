import React, { Component } from 'react';

class MyPageComponent extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h2>My Page</h2>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        


                            <div className="col-lg-6 text-center">
                                <div className="call-action d-lg-flex justify-content-between align-items-center">
                                    <div className="action-content">
                                        <h4 className="action-title">
                                            내 정보
                                    </h4>
                                    <p className="text">ID</p>
                                    <p className="text">닉네임</p>
                                        <button className="main-btn">로그아웃</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="call-action d-lg-flex justify-content-between align-items-center">
                                    <div className="action-content">
                                        <h4 className="action-title">계정</h4>
                                        <p className="text">전문가 인증</p>
                                        <p className="text">비밀번호 변경</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="call-action d-lg-flex justify-content-between align-items-center">
                                    <div className="action-content">
                                        <h4 className="action-title">커뮤니티
                                    </h4>
                                        <p className="text">닉네임 설정</p>
                                        <p className="text">커뮤니티 이용규칙</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="call-action d-lg-flex justify-content-between align-items-center">
                                    <div className="action-content">
                                        <h4 className="action-title">이용안내
                                    </h4>
                                        <p className="text">문의하기</p>
                                        <p className="text">공지사항</p>
                                        <p className="text">서비스 이용약관</p>
                                        <p className="text">개인정보 처리방침</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="call-action d-lg-flex justify-content-between align-items-center">
                                    <div className="action-content">
                                        <h4 className="action-title">기타
                                    </h4>
                                        <p className="text">정보동의 설정</p>
                                        <p className="text">회원 탈퇴</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <div className="call-action d-lg-flex justify-content-between align-items-center">
                                    <div className="action-content">
                                        <h4 className="action-title">개발자 정보
                                    </h4>
                                        <p className="text">개발자</p>
                                        
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