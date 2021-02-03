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
            comment_date:Date.now()



        }
        this.goToUpdate = this.goToUpdate.bind(this);
this.createComment=this.createComment.bind(this);
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
        this.props.history.push('/success');
    }
    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-board/${this.state.num}`);
    }



    deleteView = async function () {
        if (window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            BoardService.deleteBoard(this.state.num).then(res => {
                console.log("delete result => " + JSON.stringify(res));
                if (res.status === 200) {
                    this.props.history.push('/success');
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });

        }
    }
    deleteComment = async function (comment_no) {     BoardService.deleteComment(comment_no).then(res => {
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
                            {this.returnDate(this.state.board.board_date)} {this.state.board.id}
                        </div>

                        <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{ marginLeft: "10px" }}>글 목록으로 이동</button>
                        <button className="btn btn-info" onClick={this.goToUpdate} style={{ marginLeft: "10px" }}>글 수정</button>
                        <button className="btn btn-danger" onClick={() => this.deleteView()} style={{ marginLeft: "10px" }}>글 삭제</button>
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

                        <label> *****Answer </label> 


                        {
                            this.state.comments.map(
                                   
                                comment=>
                                <div >
                                 <label>Answer : </label>{comment.answer}
                                 {this.returnDate(comment.comment_date)}
                                 <label>좋아요 : </label> {comment.comment_like}
                              	 {comment.comement_id}<br/>
                                <button onClick={() => this.deleteComment(comment.comment_no)}>삭제({comment.comment_no})</button> <br/>
                                 -------------------------------------------------
                                 </div>


                            )	                            
                            
                            

                </div>
            </div>
        );
    }
}

export default ReadBoardComponent;