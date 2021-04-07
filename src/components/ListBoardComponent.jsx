import React, { Component } from 'react';
import BoardService from '../service/BoardService';


class ListBoardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_num: 1,
            category: props.match.params.category,
            paging: {},
            boards: [],
            search: "",
            hots: [],
            tags:""
        }
        this.createBoard = this.createBoard.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.getHotBoard();
        this.getPopularTag();
    }

    componentDidMount() {
        BoardService.getBoards(this.state.category, this.state.p_num).then((res) => {
            this.setState({
                p_num: res.data.pagingData.currentPageNum,
                category: this.state.category,
                paging: res.data.pagingData,
                boards: res.data.list

            });
        })
    }

    createBoard() {
        this.props.history.push('/create-board/_create');
    }
    readBoard(num) {
        this.props.history.push(`/read-board/${num}`);
    }
    mapBoard(category) {
        this.props.history.push(`/category-map/${category}`);
    }

    listBoard(category, p_num) {
        console.log("pageNum : " + p_num);
        BoardService.getBoards(category, p_num).then((res) => {
            console.log(res.data);
            this.setState({
                p_num: res.data.pagingData.currentPageNum,
                category: this.state.category,
                paging: res.data.pagingData,
                boards: res.data.list
            });
        });
        //this.props.history.push(`?p_num=${p_num}`);
    }

    returnDate(board_date) {
        const dateString = board_date + ""
        let y = dateString.split("T"); //날짜 , 시간.00:00:00
        let yymmdd = y[0];
        let t = y[1] + "";
        let tt = t.split(".");
        let hhmmss = tt[0];
        return (
            <p>
                [ {yymmdd}, {hhmmss} ]
            </p>
        )
    }

    viewPaging() {
        const pageNums = [];
        for (let i = this.state.paging.pageNumStart; i <= this.state.paging.pageNumEnd; i++) {
            pageNums.push(i);
        }
        let currentpage = this.state.paging.currentPageNum;
        return (pageNums.map((page) =>
            <li className="page-item" key={page.toString()}>
                <a className="page-link" onClick={() => this.listBoard(this.state.category, page)}>
                    {
                        (function () {
                            if (page == currentpage)
                                return (<div style={{ color: '#fbb9ab', fontWeight: 'bold' }}>{page}</div>);
                            else return (<div>{page}</div>);


                        })()
                    }
                </a>

            </li>
        ));
    }

    isPagingPrev() {
        if (this.state.paging.prev) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard(this.state.category, this.state.paging.currentPageNum - 1)} tabIndex="-1">Previous</a>
                </li>
            );
        }
    }

    isPagingNext() {
        if (this.state.paging.next) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard(this.state.category, this.state.paging.currentPageNum + 1)} tabIndex="-1">Next</a>
                </li>
            );
        }
    }
    isMoveToFirstPage() {
        if (this.state.p_num !== 0) {//1
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard(this.state.category, 1)} tabIndex="-1">Page1</a>
                </li>
            );
        }
    }


    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord(search) {
        this.props.history.push(`/search-board/${search}`);

    }
    clearbtn = (event) => {
        this.setState({ search: '' });

    }

    mapPage() {
        if (this.state.category != "자유게시판") {
            return (
                <h2 style={{ fontWeight: 'bold', display: "inline" }}> <a onClick={() => this.mapBoard(this.state.category)}>🗺 지도 </a></h2>

            )

        }


    }
    getHotBoard() {
        BoardService.getHotBoard().then((res) => {
            this.setState({
                hots: res.data
            });

        });
    }
    getPopularTag(){
        BoardService. getPopularTag().then((res)=>{
            console.log("this.is"+res.data)
            this.setState({
                tags: res.data
                
            });
        });
        this.returnTag()
    }
    
    returnTag() {
        const tag= this.state.tags+""
        console.log("string"+tag)
          let str01 =tag.split(",");
    
           return (
                <a className="hot">
                   #{str01[0]}<br/> 
                   #{str01[2]}<br/>
                   #{str01[4]}<br/>
                   #{str01[6]}<br/>
                   #{str01[8]}
               </a>
           )

    }
    render() {

        return (
            <div>



                <div>
                    <h2 className="text-center"  >{this.state.category}
                        <br></br><h2 style={{ color: '#FBB9AB', display: "inline", fontWeight: 'bold', textDecorationColor: '#FBB9AB', textDecoration: "underline" }}><a onClick={() => this.listBoard(this.state.category, 1)}>📃 게시판</a></h2> &nbsp;&nbsp;
                        {this.mapPage()}
                    </h2>



                </div>

                {/* 글작성, 게시물 div*/}

                <div class="container-fluid" >
                    <div >
                        <button className="btn btn-primary" onClick={this.createBoard}>글 작성</button>
                    </div>
                    <div class="row">
                        <div class="col-lg-9">
                            <div >
                                <table >

                                    <tbody>

                                        {
                                            this.state.boards.map(
                                                board =>
                                                    <tr key={board.board_no} style={{ border: "1px solid" }}>
                                                        <a onClick={() => this.readBoard(board.board_no)}><h5>{board.title}</h5></a><br />
                                                        <tr style={{ display: "inline-block", width: "800px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                                            {board.question}
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                {this.returnDate(board.board_date)}
                                                            </td>
                                                            <td>
                                                                <p>{board.id}</p>
                                                            </td>
                                                            <td style={{ float: "right" }}>
                                                                👍{board.board_like}📄{board.commentcount}
                                                            </td>

                                                        </tr>

                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>{/* 글작성, 게시물 div*/}





                        <div class="col-lg-3">
                            <div >{/* 검색, 태그 div*/}
                                <table>
                                    <tr>

                                        <td>
                                            <input type="text" placeholder="검색하기"
                                                name="search" value={this.state.search}
                                                className="form-control" onChange={this.handleSearchChange} />
                                        </td>
                                        <td><button className="btn btn-outline-secondary btn-search" onClick={() => this.searchKeyWord(this.state.search)}>Search</button></td>


                                    </tr>
                                </table>

                                <div >
                                    <div className="single-department-two mt-30">
                                        <div className="department-content text-center">
                                            <h4 className="department-title">
                                                #인기태그
                                            </h4>
                                            <p className="text">
                                                {this.returnTag()}                                           
                                            </p>   

                                        </div>
                                        <div className="department-content text-center">
                                            <h4 className="department-title">
                                                HOT 게시물
                                            </h4>

                                            {
                                                this.state.hots.map(
                                                    hot =>
                                                        <p><a className="hot" onClick={() => this.readBoard(hot.board_no)}>{hot.title}</a></p>
                                                )
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>{/* 검색, 태그 div*/}
                        </div>


                        <div >
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">

                                    {
                                        this.isMoveToFirstPage()
                                    }
                                    {
                                        this.isPagingPrev()
                                    }
                                    {
                                        this.viewPaging()
                                    }
                                    {
                                        this.isPagingNext()
                                    }

                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default ListBoardComponent;