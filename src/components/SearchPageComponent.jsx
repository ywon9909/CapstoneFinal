import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class SearchPageComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            boards: [],
            search: props.match.params.search,
            hots:[]
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchKeyWord(this.state.search);
        this.getHotBoard();
        this.getPopularTag();
    }


    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord = (event) => {

        this.props.history.push(`/search-board/${this.state.search}`);
        BoardService.searchBoard(this.state.search).then(res => {
            this.setState({
                boards: res.data
            });
        });

    }
    clearbtn = (event) => {
        this.setState({ search: '' });

    }
   
    returnDate(board_date) {
        const dateString = board_date + ""
        let y = dateString.split("T"); //날짜 , 시간.00:00:00
        let yymmdd = y[0];
        let t = y[1] + "";
        let tt = t.split(".");
        let hhmmss = tt[0];
        return (
            <div style={{ display: 'inline' }}>
            {yymmdd}, {hhmmss} 
           </div>
        )
    }
    readBoard(num) {
        this.props.history.push(`/read-board/${num}`);
    }
    getHotBoard(){
        BoardService.getHotBoard().then((res)=>{
            this.setState({
                hots : res.data
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
                <a >
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
           
            <div  class="container-fluid">
                
                <h2>검색</h2>
                <div class="row">
                        <div class="col-lg-9">

                       
                        {
                                            this.state.boards.map(
                                                board =>
                                                <div >
                                             
                                                    <div key={board.board_no} style={{ border: "1px solid" ,padding: "5px"}}>

                                                            <div><a onClick={() => this.readBoard(board.board_no)}><h5>{board.title}</h5></a><br />
                                                            </div>
                                                            <div style={{ display: "inline-block", width: "800px", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                                            {board.question} 
                                                            </div> 
                                                            <div style={{ left: "5%" ,display: "inline"}}>
                                                            {this.returnDate(board.board_date)}
                                                            &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                                                            {board.id}
                                                            </div>
                                                            <div style={{display: "inline",position: "absolute",  right: "5%" }}>
                                                                👍{board.board_like}📄{board.commentcount}
                                                            
                                                            </div>

                                                    </div>
                                               </div>   
                                            )
                                        }
                                 
                            
                            
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
                                        <table className="table-board">
                                            <tbody>
                                                {this.state.hots.map(
                                                hot =>
                                                <tr className="tr">
                                                    <a className="hot" onClick={()=>this.readBoard(hot.board_no)}>{hot.title} 👍{hot.board_like}📄{hot.commentcount}</a>
                                                </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>

                                </div>
                            </div>{/* 검색, 태그 div*/}
                        </div>
                </div>
            </div>
        );
    }
}

export default SearchPageComponent;