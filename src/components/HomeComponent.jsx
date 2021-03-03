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
        this.searchKeyWord=this.searchKeyWord.bind(this);
    }

   
    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord(search,searchType){
      
        this.props.history.push(`/search-board/${search}/${searchType}`);

    }
    clearbtn = (event) => {
        this.setState({ search: '' });

    }
    handleSearchTypeChange = (event) => {
        this.setState({ searchType: event.target.value });
    }
    GotoCategory(){
        this.props.history.push('/category-board/자유게시판');
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
            <div style={{width:"1300px",height:"800px"}}>
                 
                <h2>Home</h2>
                <div style={{float:"right",width:"500px"}}>
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
                            <td><button className="btn btn-outline-secondary btn-search" onClick={()=>this.searchKeyWord(this.state.search,this.state.searchType)}>Search</button></td>
                            <td><button className="btn btn-outline-secondary btn-clear" onClick={this.clearbtn}>Clear</button></td>

                        </tr>
                    </table>
               
                <div >
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
                </div>
                
               
            </div>
        );
    }
}

export default HomeComponent;