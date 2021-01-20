import React, { Component } from 'react';
import BoardService from '../service/BoardService';


class ListBoardComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            kins:[]
        }
    }

    componentDidMount(){
        BoardService.getBoards().then((res)=>{
            this.setState({kins:res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Boards List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                this.state.kins.map(
                                    kin=>
                                    <tr key ={kin.num}>
                                        <td>{kin.num}</td>
                                        <td>{kin.title}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;