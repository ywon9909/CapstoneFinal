import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchPageComponent from './SearchPageComponent'
import HomeComponent from './HomeComponent';

class SearchSideComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            p_num: 1,
            boards: [],
            search: "",
            searchType: "all"
        }
        this.searchKeyWord=this.searchKeyWord.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchTypeChange = this.handleSearchTypeChange.bind(this);
    }

   
    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord = (event) => {
        //this.props.history.push('/search-board');
        //this.props.history.push(`/search-board`);
        
        BoardService.searchBoard(this.state.search, this.state.searchType).then(res => {
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
            
            <div style={{backgroundColor:"yellow"}}>
                <Router>
                 <Switch>
            
            <Route path="/search-board" component={SearchPageComponent}></Route>
            <Route path="/searchside" component={SearchSideComponent}></Route>
          </Switch>
            </Router>
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
                <div className="row">
                    <table style={{ border: "1px solid", width:"400px"}}>

                        <tbody >

                           <tr style={{ border: "1px solid", width:"300px", height:"200px"}}>
                               <h3>#인기 태그</h3>
                           </tr>
                           <tr style={{ border: "1px solid", width:"300px", height:"200px"}}>
                               <h3>HOT 게시물</h3>
                           </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row" >
                    <table style={{ border: "1px solid", width:"800px", height:"200px"}}>

                        <tbody>

                            {
                                this.state.boards.map(
                                    board =>
                                        <tr key={board.board_no} style={{border:"1px solid"}}>
                                            <a onClick={() => this.readBoard(board.board_no)}><h5>{board.title}</h5></a>
                                            <tr style={{display:"inline-block", width:"800px",textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>
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
            </div>
        );
    }
}

export default SearchSideComponent;