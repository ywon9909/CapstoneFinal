import React, { Component } from 'react';
import mypic from '../assets/images/good.svg'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div >
                <header>
                    <nav className="header-top pb-10">
                        <div><a href="http://localhost:3000" className="navbar-brand"><img src={mypic} alt='mypic' />덕분에 </a>
                        </div>
                    </nav>
                </header>

<div className="container">


                <div className="col-lg-12 ">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse sub-menu-bar">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/자유게시판">자유게시판</a></li>
                                <li className="nav-item">병원
                                    <button className="sub-nav-toggler">
                                        <i className="lni-chevron-down"></i>
                                    </button>
                                    <ul className="sub-menu">
                                        <li>
                                        <a href="http://localhost:3000/category-board/정형외과">정형외과</a>
                                        </li>
                                        <li>
                                        <a href="http://localhost:3000/category-board/성형외과">성형외과</a>
                                        </li>
                                        <li>
                                        <a href="http://localhost:3000/category-board/내과">내과</a>
                                        </li>
                                        <li>
                                        <a href="http://localhost:3000/category-board/소아과">소아과</a>
                                        </li>
                                    </ul>
                                </li>

                               


                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/신경외과">신경외과</a></li>
                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/한방과">한방과</a></li>
                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/치과">치과</a></li>
                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/안과">안과</a></li>

                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/산부인과">비뇨기과</a></li>
                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/피부과">피부과</a></li>
                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/category-board/이비인후과">이비인후과</a></li>



                                <li className="nav-item"><a className="nav-link" href="http://localhost:3000/promotion">홍보</a></li>

                            </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
