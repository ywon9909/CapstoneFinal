import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: props.match.params.num,
            board: {},
            comments: [],
            answer:'',
            comment_date:Date.now(),
         tag:{}
        }
        this.goToUpdate = this.goToUpdate.bind(this);
        this.createComment=this.createComment.bind(this);
        this.likeboard = this.likeboard.bind(this);
        this.updateComment=this.updateComment(this);
    }
    changeanswer= (event) =>{
        this.setState({answer:event.target.value});
    }
    componentDidMount() {
        BoardService.getOneBoard(this.state.num).then(res => {
            this.setState({
                board: res.data
            });
            
        });
        BoardService.getOneComment(this.state.num).then(res => {
            this.setState({
                comments: res.data
            });
        });
        BoardService.getTagByNum(this.state.num).then(res=>{
            this.setState({
                tag:res.data
            });
        });

    }
    createComment = (event) =>{
        event.preventDefault();
        let comment = {
            answer:this.state.answer,
            comment_id:'user1',
            board_no:this.state.board.board_no,
            board_id:this.state.board.id,
            comment_date:this.state.comment_date,
            comment_like:0
        };

        BoardService.createComment(comment).then(res => {
            window.location.replace('/read-board/'+this.state.num);
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
                [ {yymmdd}, {hhmmss} ] 
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
    

    likeboard=(event)=>{
        event.preventDefault();
        this.setState({board_like:event.target.value});
        let board = {
            title:this.state.board.title,
            question:this.state.board.question,
            board_date:this.state.board.board_date,
            board_like:this.state.board.board_like+1,
            category:this.state.board.category,
            id:this.state.board.id

        }; 
        BoardService.updateBoard(this.state.num, board).then(res => {
            //this.props.history.push(`/category-board/${this.state.board.category}`);
            if (res.status === 200) {
                window.location.replace('/read-board/'+this.state.num);
            } else {
                alert("실패했습니다.");
            }
        });
        
    }


  
    updateComment = async function (comment_no,comment_like,comment_date,comment_id,answer) {     
      
        let comment = {

            answer:answer,
            comment_id:comment_id,
            board_no:this.state.board.board_no,
            board_id:this.state.board.id,
            comment_date:comment_date,
            comment_like:comment_like+1

        }; 
        BoardService.updateComment(comment_no,comment).then(res => {
                console.log("delete result => " + JSON.stringify(res));
                if (res.status === 200) {
                    window.location.replace('/read-board/'+this.state.num);
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
                    window.location.replace('/read-board/'+this.state.num);
                } else {
                    alert("댓글 삭제가 실패했습니다.");
                }
            });

        
    }
    render() {
        return (
            <div>
                <div className="card col-md-10 offset-md-1">
                    <h3 className="text-center"> {this.state.board.title}</h3>
                    <div className="card-body">

                        <div className="row">
                            <label> Board Type : </label> {this.state.board.category}
                        </div>

                        <div className="row">
                        <label> Title : </label>  {this.state.board.title}
                        </div>
                        <div className="row">
                        <label> Question : </label>
                            {this.state.board.question}
                        </div >
                        <div className="row">
                            {this.returnDate(this.state.board.board_date)}
                        </div>
                        <div className="row"> {this.state.board.id}</div>
                        <div><label>태그 : #{this.state.tag.tag1} , #{this.state.tag.tag2}   , #{this.state.tag.tag3}, #{this.state.tag.tag4}, #{this.state.tag.tag5}  </label></div>
                        <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{ marginLeft: "10px" }}>글 목록으로 이동</button>
                        <button className="btn btn-info" onClick={this.goToUpdate} style={{ marginLeft: "10px" }}>글 수정</button>
                        <button className="btn btn-danger" onClick={() => this.deleteView()} style={{ marginLeft: "10px" }}>글 삭제</button>
                        <button className="btn btn-warning" onClick={this.likeboard} style={{marginLeft: "10px"}}>좋아요({this.state.board.board_like})</button>
                    </div>
                </div>
                <div className="card col-md-10 offset-md-1">
                <div className="card-body">
   
                     <textarea
                        type="text"
                        placeholder="댓글" name="answer"
                        value={this.state.answer}
                        onChange={this.changeanswer}
                    />
        <button  onClick={this.createComment} >댓글</button>
        <br/>

                        <label> <h5>Answer</h5> </label> 


                        {
                            this.state.comments.map(
                                   
                                comment=>
                                <div >
                                 <label>Answer : </label>{comment.answer}
                                 {this.returnDate(comment.comment_date)}

                                 <label>좋아요 : </label> {comment.comment_like}
                                  {comment.comement_id}<br/>
                                  <button onClick={() => this.updateComment(comment.comment_no,comment.comment_like,comment.comment_date,comment.comment_id,comment.answer)}>좋아요({comment.comment_like})</button>
                                <button onClick={() => this.deleteComment(comment.comment_no)}>삭제({comment.comment_no})</button> <br/>
                                 -------------------------------------------------
                                 </div>


                            )                               
                            
                            
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadBoardComponent;