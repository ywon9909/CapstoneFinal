import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import SearchSideComponent from '../components/SearchSideComponent'

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_num: 1,
            category: props.match.params.category,
            paging: {},
            boards: [],
            search: "",
            searchType: "all"

        }
        this.createBoard = this.createBoard.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
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
                                return (<div style={{ color: 'red', fontWeight: 'bold' }}>{page}</div>);
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
                    <a className="page-link" onClick={() => this.listBoard(this.state.category, 1)} tabIndex="-1">Move to First Page</a>
                </li>
            );
        }
    }


    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord(search, searchType) {
        this.props.history.push(`/search-board/${search}/${searchType}`);
        
    }
    clearbtn = (event) => {
        this.setState({ search: '' });

    }
    handleSearchTypeChange = (event) => {
        this.setState({ searchType: event.target.value });
    }
    mapPage() {
        if (this.state.category != "자유게시판") {
            return (
                <a onClick={() => this.mapBoard(this.state.category)}>    지도</a>
            )

        }


    }
    render() {

        return (

            <div style={{width:"1300px",height:"800px"}}>


                <h2 className="text-center">{this.state.category}
                    <a onClick={() => this.mapBoard(this.state.category)}>    지도</a>
                </h2>


                <div style={{ float: "right", width: "500px" }}>{/* 검색, 태그 div*/ }
                    <table>
                        <tr>
                            <td>
                                <select className="form-control" name="type" value={this.state.searchType} onChange={this.handleSearchTypeChange}>
                                    <option value="all">제목+질문</option>
                                    <option value="title">제목</option>
                                    <option value="question">질문</option>

                                </select>
                            </td>

                            <td>
                                <input type="text" placeholder="검색하기"
                                    name="search" value={this.state.search}
                                    className="form-control" onChange={this.handleSearchChange} />
                            </td>
                            <td><button className="btn btn-outline-secondary btn-search" onClick={() => this.searchKeyWord(this.state.search, this.state.searchType)}>Search</button></td>
                            <td><button className="btn btn-outline-secondary btn-clear" onClick={this.clearbtn}>Clear</button></td>

                        </tr>
                    </table>

                    <div >
                        <table style={{ border: "1px solid", width: "400px" }}>

                            <tbody >

                                <tr style={{ border: "1px solid", width: "300px", height: "200px" }}>
                                    <h3>#인기 태그</h3>
                                </tr>
                                <tr style={{ border: "1px solid", width: "300px", height: "200px" }}>
                                    <h3>HOT 게시물</h3>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>{/* 검색, 태그 div*/ }
                <div style={{float:"left",width:"700px",marginRight:"100px"}}> {/* 글작성, 게시물 div*/ }
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.createBoard}>글 작성</button>
                    </div>
                    <div className="row">
                        <table style={{ border: "1px solid", width: "700px", height: "200px" }}>

                            <tbody>

                                {
                                    this.state.boards.map(
                                        board =>
                                            <tr key={board.board_no} style={{ border: "1px solid" }}>
                                                <a onClick={() => this.readBoard(board.board_no)}><h5>{board.title}</h5></a>
                                                <tr style={{ display: "inline-block", width: "600px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
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
                                                        👍{board.board_like}📄
                                                </td>

                                                </tr>

                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>{/* 글작성, 게시물 div*/ }
                <div className="row" >
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
        );
    }
}

export default ListBoardComponent;