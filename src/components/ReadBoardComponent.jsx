import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: props.match.params.num,
            board: {},
            comments: [],
            answer: '',
            comment_date: Date.now(),
            search: props.match.params.search,
            Member:{}, //1
            hots:[],
            tags:[],
            similar:[]
        }
        this.getOneBoard();
        this.goToUpdate = this.goToUpdate.bind(this);
        this.createComment = this.createComment.bind(this);
        this.likeboard = this.likeboard.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.getHotBoard();
        this.getPopularTag();   
        this.getSimilarTag();
    }
    
    changeanswer = (event) => {
        this.setState({ answer: event.target.value });
    }
    getOneBoard(){
        BoardService.getOneBoard(this.state.num).then(res => {
            console.log("Board "+res.data)
            this.setState({
                board: res.data
            });

        });
    }
    componentDidMount() {
        
        BoardService.getOneComment(this.state.num).then(res => {
            this.setState({
                comments: res.data
            });
        });


    }
    createComment = (event) => {
        event.preventDefault();
        let comment = {
            answer: this.state.answer,
            comment_id: 'user1',
            board_no: this.state.board.board_no,
            board_id: this.state.board.id,
            comment_date: this.state.comment_date,
            comment_like: 0
        };

        BoardService.createComment(comment).then(res => {
            window.location.replace('/read-board/' + this.state.num);
            //this.props.history.push('/read-board/'+this.state.num);
        });



    }

    returnBoardType(category) {
        let type = null;
        return (
            <div className="row">
                <label>Board type : </label> {type}
            </div>
        )
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
                {yymmdd}, {hhmmss}
            </div>
        )
    }

    goToList() {
        this.props.history.push(`/category-board/${this.state.board.category}`);
    }
    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-board/${this.state.num}`);
    }


    likeboard = (event) => {
        event.preventDefault();
        this.setState({ board_like: event.target.value });
        let board = {
            title: this.state.board.title,
            question: this.state.board.question,
            board_date: this.state.board.board_date,
            board_like: this.state.board.board_like + 1,
            category: this.state.board.category,
            id: this.state.board.id

        };
        BoardService.updateBoard(this.state.num, board).then(res => {
            //this.props.history.push(`/category-board/${this.state.board.category}`);
            if (res.status === 200) {
                window.location.replace('/read-board/' + this.state.num);
            } else {
                alert("실패했습니다.");
            }
        });

    }



    updateComment = async function (comment_no, comment_like, comment_date, comment_id, answer) {

        let comment = {

            answer: answer,
            comment_id: comment_id,
            board_no: this.state.board.board_no,
            board_id: this.state.board.id,
            comment_date: comment_date,
            comment_like: comment_like + 1

        };
        BoardService.updateComment(comment_no, comment).then(res => {
            console.log("delete result => " + JSON.stringify(res));
            if (res.status === 200) {
                window.location.replace('/read-board/' + this.state.num);
            } else {
                alert("수정이 실패했습니다.");
            }
        });


    }
    deleteView = async function () {
        if (window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            BoardService.deleteBoard(this.state.num).then(res => {
                console.log("delete result => " + JSON.stringify(res));
                if (res.status === 200) {
                    this.props.history.push(`/category-board/${this.state.board.category}`);
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });

        }
    }
    deleteComment = async function (comment_no) {
        BoardService.deleteComment(comment_no).then(res => {
            console.log("delete result => " + JSON.stringify(res));
            if (res.status === 200) {
                window.location.replace('/read-board/' + this.state.num);
            } else {
                alert("댓글 삭제가 실패했습니다.");
            }
        });


    }
    readBoard(num) {
        window.location.replace(`/read-board/${num}`)
        //this.props.history.push(`/read-board/${num}`);
    }
    handleSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }
    searchKeyWord(search){
        this.props.history.push(`/search-board/${search}`);

    }
    // Doccheck(id){
    //     console.log("나와라"+id)
    //     BoardService.getMemberById(id).then(res=>{
    //         console.log("넌 왜 안나와"+res.data)
    //         this.setState({
    //             Member: res.data
                
    //         });
    //     });
    //     if (this.state.Member.doc != 0 ) {
    //         return (
    //             <div style={{  position: "absolute",top:"0px",right:"5%"}}> 🩺 </div>

    //         )

    //     }
    // }
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
                <a className="hot">
                   #{str01[0]}<br/> 
                   #{str01[2]}<br/>
                   #{str01[4]}<br/>
                   #{str01[6]}<br/>
                   #{str01[8]}
               </a>
           )

    }
    getSimilarTag(){
       
        BoardService.getSimilarTag(this.state.board.tag1,this.state.board.tag2,this.state.board.tag3,this.state.board.tag4,this.state.board.tag5).then((res)=>{
            console.log("Similar Tag "+ res.data)
            this.setState({
                similar:res.data
            });
        });
       
    }
  
    render() {
        return (

            <div class="container-fluid" >
                <div class="row">
                    <div class="col-lg-9">
                        <div >
                            <div className="card col-md-10 offset-md-1" >
                                <div className="row">
                                    &nbsp;&nbsp;&nbsp;<h5 style={{ color: "gray", padding: "5px" }}> [{this.state.board.category}] {/*this.Doccheck(this.state.board.id)*/}</h5>
                                </div>
                                <h3 className="text-center"> {this.state.board.title}</h3>
                                <br />
                                <div className="row">
                                    <h5 style={{ display: 'inline' }}>&nbsp;&nbsp;&nbsp;&nbsp;{this.state.board.id}</h5>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.returnDate(this.state.board.board_date)}
                                </div>

                                <div className="card-body" style={{ display: 'inline' }}>

                                    <div className="row">
                                        <br />
                                        <hr style={{ width: "100%", color: "black" }} />
                                        {this.state.board.question}
                                    </div >
                                    <br />
                                    <div><label> <div style={{ border: "5px", borderColor: "black" }}>
                                        TAG: #{this.state.board.tag1} , #{this.state.board.tag2}   , #{this.state.board.tag3},
                                         #{this.state.board.tag4}, #{this.state.board.tag5}  </div></label></div>
                                    <br /><br />
                                    <div style={{ position: "absolute", bottom: "10px", left: "5%" }}>
                                        <button className="btn btn-primary" onClick={this.goToList.bind(this)} >목록</button>
                                    </div>
                                    <div style={{ position: "absolute", bottom: "10px", right: "5%" }}>
                                        <button className="btn btn-info" onClick={this.goToUpdate} >글 수정</button>
                                        <button className="btn btn-danger" onClick={() => this.deleteView()} >글 삭제</button>
                                        <button className="btn btn-warning" onClick={this.likeboard} >👍{this.state.board.board_like}</button>
                                    </div>
                                </div>
                            </div>

                            <div className="card col-md-10 offset-md-1" >

                                <div className="row" >

                                    <textarea style={{ width: "80%", height: "40px", resize: "none", outline: "none" }}
                                        type="text"
                                        placeholder="댓글" name="answer"
                                        value={this.state.answer}
                                        onChange={this.changeanswer}
                                    />
                                    <button style={{ width: "20%", height: "40px" }} className="btn btn-primary" onClick={this.createComment} >댓글</button>


                                </div>
                            </div>


                            {
                                this.state.comments.map(

                                    comment =>
                                        <div className="card col-md-10 offset-md-1">
                                            <div className="row"  >
                                                &nbsp;&nbsp;&nbsp;&nbsp; <h5>{comment.comment_id}</h5> &nbsp;  &nbsp; &nbsp; {this.returnDate(comment.comment_date)}
                                                <br />
                                                <div style={{ position: "absolute", top: "0px", right: "5%" }}>
                                                    <a onClick={() => this.updateComment(comment.comment_no, comment.comment_like, comment.comment_date, comment.comment_id, comment.answer)}>👍{comment.comment_like}</a> &nbsp;&nbsp;&nbsp;
                                            <a onClick={() => this.deleteComment(comment.comment_no)}>삭제</a>
                                                </div>
                                            </div>
                                            {comment.answer}

                                            {comment.comement_id}<br />


                                        </div>


                                )


                            }

                        </div>

                    </div>
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
                                                <p><a className="hot" onClick={()=>this.readBoard(hot.board_no)}>{hot.title}</a>
                                                 👍{hot.board_like}📄</p>
                                            )
                                        }
                                    </div>
                                    <div className="department-content text-center">
                                        <h4 className="department-title">
                                            연관질문
                                        </h4>
                                           
                                        {
                                            this.state.similar.map(
                                                simi =>
                                                       <p><a className="hot" onClick={()=>this.readBoard(simi.board_no)}>{simi.title}</a>
                                                        👍{simi.board_like}📄</p>)
                                                    
                                        }
                                                
                                        
                                        {this.getSimilarTag()}
       
                                        
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

export default ReadBoardComponent;