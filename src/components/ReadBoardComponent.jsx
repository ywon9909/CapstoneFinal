import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: props.match.params.num,
            board: {}
        }
        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        BoardService.getOneBoard(this.state.num).then(res => {
            this.setState({ board: res.data });
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
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> {this.state.board.Title}</h3>
                    <div className="card-body">

                        <div className="row">
                            <label> Board Type : </label> {this.state.board.Category} 
                        </div>

                        <div className="row">
                            <label> Title </label> : {this.state.board.Title}
                        </div>
                        <div className="row">
                            <label> Question </label> : <br></br>
                            {this.state.board.Question}
                        </div >
                        {/*<div className = "row">
                                <label> Answer  </label>: 
                                {this.state.board.answer1}
                                
                                {this.state.board.answer2}
                            </div>*/}
                        <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{ marginLeft: "10px" }}>글 목록으로 이동</button>
                        <button className="btn btn-info" onClick={this.goToUpdate} style={{ marginLeft: "10px" }}>글 수정</button>
                        <button className="btn btn-danger" onClick={() => this.deleteView()} style={{ marginLeft: "10px" }}>글 삭제</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadBoardComponent;