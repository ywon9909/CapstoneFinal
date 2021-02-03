import React, { Component } from 'react';
import BoardService from '../service/BoardService';


class CreateBoardComponent extends Component {
    constructor(props) {
        super(props);


        this.state={

            num: this.props.match.params.num,
            title:'',
            question:'',
            board_date:Date.now(),
            board_like:'0',
            category:'',
            id:''
            
        }
        
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
        this.changeBoard_dateHandler = this.changeBoard_dateHandler.bind(this);
        this.changeBoard_likeHandler = this.changeBoard_likeHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changeidHandler = this.changeidHandler.bind(this);
        this.createBoard= this.createBoard.bind(this);
    }
  
    changeTitleHandler = (event) =>{
        this.setState({title:event.target.value});
    }
    changeQuestionHandler = (event) => {
        this.setState({question:event.target.value});
    }
    changeBoard_dateHandler = ()=>{
        this.setState({board_date:Date.now()});
    }
    changeBoard_likeHandler =(event)=>{
        this.setState({board_like:event.target.value});
    }
    changeidHandler = (event)=>{
        this.setState({id:event.target.value});
    }
    changeCategoryHandler = (event)=>{
        this.setState({category:event.target.value});
    }

    createBoard = (event) =>{
        event.preventDefault();
        let board = {
            title:this.state.title,
            question:this.state.question,
            board_date:this.state.board_date,
            board_like:this.state.board_like,
            category:this.state.category,
            id:this.state.id
            
        };
        console.log("board=> "+JSON.stringify(board));
        if (this.state.num === '_create') {
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/success');
            });
        } else {
            BoardService.updateBoard(this.state.num, board).then(res => {
                this.props.history.push('/success');
            });
        }

    
    }
    cancel(){
        this.props.history.push('/board');
    }
    getTitle() {
        if (this.state.num === '_create') {
            return <h3 className="text-center">새글을 작성해주세요</h3>
        } else {
            return <h3 className="text-center">{this.state.num}글을 수정 합니다.</h3>
        }
    }

    
    componentDidMount() {
        if (this.state.num === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.num).then( (res) => {
                let board = res.data;
                console.log("board => "+ JSON.stringify(board));
                
                this.setState({
                    
                        title: board.title,
                        question:board.question,
                        board_date:board.board_date,
                        board_like:board.board_like,
                        category:board.category,
                        id:board.id

                    });
            });
        }
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-8 offset-md-2 offset-md-2">
                           {this.getTitle()}
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Category </label>
                                        <select placeholder="category" name="category" className="form-control"
                                        value={this.state.category} onChange={this.changeCategoryHandler}>
                                            <option value="게시판">게시판 타입을 선택해주세요</option>
                                            <option value="자유게시판">자유게시판</option>
                                            <option value="정형외과">정형외과</option>
                                            <option value="성형외과">성형외과</option>
                                            <option value="내과">내과</option>
                                            <option value="소아과">소아과</option>
                                            <option value="신경외과">신경외과</option>
                                            <option value="한방과">한방과</option>
                                            <option value="치과">치과</option>
                                            <option value="비뇨기과">비뇨기과</option>
                                            <option value="피부과">피부과</option>
                                            <option value="이비인후과">이비인후과</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Title </label>
                                        <input type="text" placeholder="title" name="title" className="form-control" cols="60" rows="8"
                                        value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Question  </label>
                                        <textarea placeholder="question" name="question" className="form-control" 
                                        value={this.state.question} onChange={this.changeQuestionHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> id</label>
                                        <input placeholder="id" name="id" className="form-control"
                                        value={this.state.id} onChange={this.changeidHandler}/>
                                    </div>
                                   
                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateBoardComponent;