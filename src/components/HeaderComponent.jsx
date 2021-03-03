import React, { Component } from 'react';

class HeaderComponent extends Component {
constructor(props){
    super(props)
    this.state={

    }
}

    render() {
        return (
            <div >
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:3000" className="navbar-brand">어디 아픈의?</a>
                        </div>
                    </nav>
                </header>
                
                
                    <div className="nav justify-content-center">
                        <div>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/자유게시판">자유게시판</a></li>
                       <div className="border-left: 1px black">
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/정형외과">정형외과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/성형외과">성형외과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/내과">내과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/소아과">소아과</a></li>
                        </div>
                        <div>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/신경외과">신경외과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/한방과">한방과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/치과">치과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/안과">안과</a></li>
                        </div>
                        <div>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/산부인과">비뇨기과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/피부과">피부과</a></li>
                        <li className="nav-item"><a className="nav-link" href ="http://localhost:3000/category-board/이비인후과">이비인후과</a></li>
                        </div>
                        <div>
                      
                        <li className="nav-item"><a className="nav-link" href="http://localhost:3000/promotion">홍보</a></li>
                        </div>
                        </ul>
                    </div>
                    </div>
            </div>
        );
    }
}

export default HeaderComponent;
