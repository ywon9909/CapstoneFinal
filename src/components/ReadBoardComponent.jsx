import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ReadBoardComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            num:props.match.params.num,
            kin:{}
        }
    }

    componentDidMount(){
        BoardService.getOneBoard(this.state.num).then(res=>{
            this.setState({kin:res.data});
        });
    }
    
    returnBoardType(){
        let type="자유게시판";
        return(
            <div className="row">
                <label>Board type : </label> {type}
            </div>
        )
    }

    goToList(){
        this.props.history.push('/board');
    }
    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-board/${this.state.num}`);
    }
    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">
                            
                            {this.returnBoardType()}
                            
                            <div className = "row">
                                <label> Title </label> : {this.state.kin.title}
                            </div>
                            <div className = "row">
                                <label> Question </label> : <br></br>
                                {this.state.kin.question}
                            </div >
                            <div className = "row">
                                <label> Answer  </label>: 
                                {this.state.kin.answer1}
                                {this.state.kin.answer2}
                            </div>
                            <button className="btn btn-primary" onClick={this.goToList.bind(this)} style={{marginLeft:"10px"}}>글 목록으로 이동</button>
                            <button className="btn btn-info" onClick={this.goToUpdate} style={{marginLeft:"10px"}}>글 수정</button>
                            <button className="btn btn-danger" onClick={() => this.deleteView()} style={{marginLeft:"10px"}}>글 삭제</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadBoardComponent;