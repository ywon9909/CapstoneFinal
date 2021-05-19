import React, { Component, useState } from 'react';
import BoardService from '../service/BoardService';
import userIcon from '../assets/images/user-icon.png';
class HomeComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            p_num: 1,
            boards1: [],
            boards2: [],
            boards3: [],
            boards4: [],
            boards5: [],
            boards6: [],
            boards7: [],
            boards8: [],
            boards9: [],
            boards10: [],
            boards11: [],
            boards12: [],
            search: "",
            hots:[],
            tags:"",
            str01: "",
            id:''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.getHotBoard();
        this.getPopularTag();
        this.getRecentBoard1("자유게시판");
        this.getRecentBoard2("정형외과");
        this.getRecentBoard3("신경외과");
        this.getRecentBoard4("비뇨기과");
        this.getRecentBoard5("성형외과");
        this.getRecentBoard6("한방과");
        this.getRecentBoard7("피부과");
        this.getRecentBoard8("내과");
        this.getRecentBoard9("치과");
        this.getRecentBoard10("이비인후과");
        this.getRecentBoard11("소아과");
        this.getRecentBoard12("안과");
        this.searchKeyWord = this.searchKeyWord.bind(this);
 
    }
    componentDidMount() {
     
        
        BoardService. getUserName( ).then ((res)=>{
            console.log("id is "+res.data)
            this.setState({
                id: res.data
                
            });
        });
        BoardService. getPopularTag().then((res)=>{
            console.log("this is popularTag"+res.data)
            this.setState({
                tags: res.data
                
            });
        });
        
       
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

    GotoCategory(category) {
        this.props.history.push(`/category-board/${category}`);
    }
    GotoAdminpage() {
        if(this.state.id === "admin" )
            this.props.history.push(`/manage`);

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
    getHotBoard(){
        BoardService.getHotBoard().then((res)=>{
            console.log("this.is. hot"+res.data)
            this.setState({
                hots : res.data
            });
            
        });
    }
    
    getRecentBoard1(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards1 : res.data
            });
        });
    }
    getRecentBoard2(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards2 : res.data
            });
        });
    }
    getRecentBoard3(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards3 : res.data
            });
        });
    }
    getRecentBoard4(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards4 : res.data
            });
        });
    }
    getRecentBoard5(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards5 : res.data
            });
        });
    }
    getRecentBoard6(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards6 : res.data
            });
        });
    }
    getRecentBoard7(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards7 : res.data
            });
        });
    }
    getRecentBoard8(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards8 : res.data
            });
        });
    }
    getRecentBoard9(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards9 : res.data
            });
        });
    }
    getRecentBoard10(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards10 : res.data
            });
        });
    }
    getRecentBoard11(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards11 : res.data
            });
        });
    }
    getRecentBoard12(category){
        BoardService.getRecentBoard(category).then((res)=>{
            console.log("recentboard "+res.data)
            this.setState({
                boards12 : res.data
            });
        });
    }
   returnTAG(tagz){

        console.log("this.is tags"+tagz)
    
  
        const tags = tagz + ""
        let ys = tags.split(","); //날짜 , 시간.00:00:00
       

        return(<a className="hot">
            #{this.state.tags[2]}<br/> 
            </a>
            /*
#{this.state.str01[0]}<br/> 
#{this.state.str01[2]}<br/>
#{this.state.str01[4]}<br/>
#{this.state.str01[6]}<br/>
#{this.state.str01[8]}
*/
        )
   }


   getPopularTag(){
        
    this.returnTag()
}

returnTag = () => {
    const tag= this.state.tags+""
    console.log("string"+ tag)
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
            <body >
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-lg-2">
                            <div className="single-features text-center mt-30">
                                <div className="department-content text-center">
                                    <a onClick={()=> this.props.history.push('/mypage')}>
                                        <h4 className="department-title">계정</h4>
                                    </a>
                                    <div>
                                    <img src={userIcon} alt='userIcon' ></img>
                                    </div>
                                    <div>
                                        <button  onClick={()=> this.props.history.push('/mypage')}>내 정보</button>
                                        <button onClick={()=> this.props.history.push('/')}>로그아웃</button>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="single-features text-center mt-30" style={{padding:'0px'}}>
                                <div className="department-content text-center">


                                    <h4 style={{padding:'0px'}} className="department-title" a onClick={() => this.GotoAdminpage()}> <img className="image" src={require('../../src/image/ad5.jpg' ).default} /></h4>

                                  
                                </div>
                            </div>


                           
                        </div>
                        
                        <div className="row col-lg-7">
                            <div className="col-lg-4 col-md-8" >
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("자유게시판")}><h4 className="department-title">자유게시판</h4></a>
                                       
                                        <table className="table-board">
                                            <tbody>
                                                {this.state.boards1.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)}>{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody> 
                                         </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("정형외과")}><h4 className="department-title">정형외과</h4></a>
                                        
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards2.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("신경외과")}><h4 className="department-title">신경외과</h4></a>
                                       
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards3.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("비뇨기과")}><h4 className="department-title">비뇨기과</h4></a>
                                    
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards4.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("성형외과")}><h4 className="department-title">성형외과</h4></a>
                                      
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards5.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("한방과")}><h4 className="department-title">한방과</h4></a>
                                       
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards6.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("피부과")}><h4 className="department-title">피부과</h4></a>
                                        
                                   
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards7.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory" onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("내과")}><h4 className="department-title">내과</h4></a>
                                    
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards8.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("치과")}><h4 className="department-title">치과</h4></a>
                                 
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards9.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory" onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("이비인후과")}><h4 className="department-title">이비인후과</h4></a>
                                       
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards10.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("소아과")}><h4 className="department-title">소아과</h4></a>
                                   
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards11.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-8">
                                <div className="single-features text-center mt-30">
                                    <div className="department-content text-center">
                                        <a onClick={() => this.GotoCategory("안과")}><h4 className="department-title">안과</h4></a>
                                      
                                        <table className="table-board">
                                            <tbody>
                                                
                                                {this.state.boards12.map(
                                                board =>
                                                <tr className="tr">
                                                    <a className="homecategory"  onClick={()=>this.readBoard(board.board_no)} >{board.title}</a> 
                                                </tr>
                                                )}
                                            </tbody>
                                        </table> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
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
                                        <h4 className="department-title" >
                                            HOT 게시물                                          
                                        </h4>
                                        <table className="table-board">
                                            <tbody>
                                                {this.state.hots.map(
                                                hot =>
                                                <tr className="tr">
                                                    <a className="hot" onClick={()=>this.readBoard(hot.board_no)}>{hot.title} 🤍{hot.board_like} 🗨️ {hot.commentcount}</a>
                                                </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </body >
        );
    }
}

export default HomeComponent;