import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import SearchSideComponent from '../components/SearchSideComponent'
class HomeComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            p_num: 1,
            boards: [],
            search: "",
            searchType: "all"
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
        this.searchKeyWord = this.searchKeyWord.bind(this);
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
    GotoCategory(category) {
        this.props.history.push(`/category-board/${category}`);
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
    readBoard(num) {
        this.props.history.push(`/read-board/${num}`);
    }

    render() {
        return (
            <div style={{ width: "1300px", height: "800px" }}>

                <h2>Home</h2>
                <table style={{ float: "left", border: "1px solid", width: "200px", margin: "20px" }}>
                    <tr style={{ border: "1px solid", width: "200px", height: "200px" }}><h3>계정 정보</h3></tr>
                    <tr style={{ border: "1px solid", width: "200px", height: "200px" }}><h3>광고</h3></tr>
                </table>
                <table style={{ float: "left", border: "1px solid", width: "500px", margin: "20px" }}>
                    <tr >
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("자유게시판")}><h3>자유게시판</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("정형외과")}><h3>정형외과</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("신경외과")}><h3>신경외과</h3></a>
                        </td>

                    </tr>
                    <tr >
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("비뇨기과")}><h3>비뇨기과</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("성형외과")}><h3>성형외과</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("한방과")}><h3>한방과</h3></a>
                        </td>
                    </tr>
                    <tr style={{ border: "1px solid", width: "100px", height: "200px" }}>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("피부과")}><h3>피부과</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("내과")}><h3>내과</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("치과")}><h3>치과</h3></a>
                        </td>
                    </tr>
                    <tr >
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("이비인후과")}><h3>이비인후과</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("소아과")}><h3>소아과</h3></a>
                        </td>
                        <td style={tdStyle}>
                            <a onClick={() => this.GotoCategory("안과")}><h3>안과</h3></a>
                        </td>
                    </tr>
                </table>
                <div style={{ float: "right", width: "500px" }}>
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
                </div>


            </div>
        );
    }
}
const tdStyle = {
    border: "1px solid", width: "100px", height: "200px", backgroundColor: "#d4e4f2",
}
export default HomeComponent;