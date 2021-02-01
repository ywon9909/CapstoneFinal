import React, { Component} from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: props.match.params.num,
            board: {},
            comments: []

        }
        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        BoardService.getOneBoard(this.state.num).then(res => {
            this.setState({
                board: res.data

            });
        });
        BoardService.getOneComment(this.state.num).then(res => {
            this.setState({
                comments: res.data.list
            });
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
                <label>  [ {yymmdd}, {hhmmss} ] </label>
            </div>
        )
    }

    goToList() {
        this.props.history.push('/board');
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
                    this.props.history.push('/board');
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });

        }
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
                            <label> Title </label> : {this.state.board.title}
                        </div>
                        <div className="row">
                            <label> Question </label> : <br></br>
                            {this.state.board.question}
                        </div >
                        <div className="row">
                            {this.returnDate(this.state.board.board_date)}
                        </div>

                        <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{ marginLeft: "10px" }}>글 목록으로 이동</button>
                        <button className="btn btn-info" onClick={this.goToUpdate} style={{ marginLeft: "10px" }}>글 수정</button>
                        <button className="btn btn-danger" onClick={() => this.deleteView()} style={{ marginLeft: "10px" }}>글 삭제</button>
                    </div>
                </div>
                <div className="card col-md-10 offset-md-1">
                    <div className="row">
                        <label> *****Answer </label> : comment.answer 추가
            
                       {this.state.comments.map(
                                    comment=>
                            <tr key={comment.comment_no}>
                                <td>********{comment.comment_no}</td>
                            <td>{comment.answer}</td>
                            <td>{this.returnDate(comment.comment_date)}</td>
                            <td>{comment.comment_like}</td>
                            <td>{comment.id}</td>
                            </tr>
                       )
    }
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadBoardComponent;