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
            <div className="row">
                <label> [ {yymmdd}, {hhmmss} ] </label>
            </div>
        )
    }

    viewPaging() {
        const pageNums = [];
        for (let i = this.state.paging.pageNumStart; i <= this.state.paging.pageNumEnd; i++) {
            pageNums.push(i);
        }
        return (pageNums.map((page) =>
            <li className="page-item" key={page.toString()}>
                <a className="page-link" onClick={() => this.listBoard(this.state.category, page)}>{page}</a>
            </li>
        ));
    }

    isPagingPrev() {
        if (this.state.paging.prev) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard((this.state.category, this.state.paging.currentPageNum - 1))} tabIndex="-1">Previous</a>
                </li>
            );
        }
    }

    isPagingNext() {
        if (this.state.paging.next) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard((this.state.category, this.state.paging.currentPageNum + 1))} tabIndex="-1">Next</a>
                </li>
            );
        }
    }
    isMoveToFirstPage() {
        if (this.state.p_num !== 0) {//1
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard(this.state.category, 1)} >Move to First Page</a>
                </li>
            );
        }
    }
    isMoveToLastPage() {
        if (this.state.p_num !== this.state.paging.pageNumCountTotal) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick={() => this.listBoard((this.state.category, this.state.paging.pageNumCountTotal))} tabIndex="-1">LastPage</a>
                </li>
            );
        }
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord = (event) => {

        BoardService.searchBoard(this.state.search,this.state.searchType).then(res => {
            this.setState({
                boards: res.data
            });
        });


    }
    clearbtn = (event) => {
        this.setState({ search: '' });

    }
    handleSearchTypeChange = (event) => {
        this.setState({ searchType: event.target.value });
    }
    render() {

        return (

            <div>
                <div>
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
                            <td><button className="btn btn-outline-secondary btn-search" onClick={this.searchKeyWord}>Search</button></td>
                            <td><button className="btn btn-outline-secondary btn-clear" onClick={this.clearbtn}>Clear</button></td>

                        </tr>
                    </table>
                </div>
                <h2 className="text-center">{this.state.category}
                    <a onClick={() => this.mapBoard(this.state.category)}>    지도</a>
                </h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.createBoard}>글 작성</button>
                </div>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>

                                <th>타이틀</th>
                                <th>작성날짜</th>
                                <th>좋아요</th>
                                <th>작성자</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.boards.map(
                                    board =>
                                        <tr key={board.board_no}>
                                            <td> <a onClick={() => this.readBoard(board.board_no)}>{board.title}</a></td>
                                            <td>{this.returnDate(board.board_date)}</td>
                                            <td>{board.board_like}</td>
                                            <td>{board.id}</td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row">
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
                            {
                                this.isMoveToLastPage()
                            }
                        </ul>
                    </nav>

                </div>
            </div>
        );
    }
}

export default ListBoardComponent;