import React, { Component } from 'react';
import BoardService from '../service/BoardService';


class ListBoardComponent extends Component {
    constructor(props){
        super(props)
        this.state={ 
            p_num:1,
            paging:{},
            boards:[]
        }
        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount(){
        BoardService.getBoards(this.state.p_num).then((res)=>{
            this.setState({
                p_num:res.data.pagingData.currentPageNum,
                paging:res.data.pagingData,
                boards:res.data.list
            });
        })
    }

    createBoard(){
        this.props.history.push('/create-board/_create');
    }
    readBoard(num) {
        this.props.history.push(`/read-board/${num}`);
    }

    listBoard(p_num){
        console.log("pageNum : "+ p_num);
        BoardService.getBoards(p_num).then((res)=>{
            console.log(res.data);
            this.setState({
                p_num:res.data.pagingData.currentPageNum,
                paging:res.data.pagingData,
                boards:res.data.list});
        });
        //this.props.history.push(`?p_num=${p_num}`);
    }

    viewPaging(){
        const pageNums =[];
        for(let i = this.state.paging.pageNumStart;i <= this.state.paging.pageNumEnd; i++ ){
            pageNums.push(i);
        }
        return(pageNums.map((page)=> 
        <li className="page-item" key={page.toString()}>
            <a className="page-link" onClick={()=> this.listBoard(page)}>{page}</a>
        </li>
        ));
    }

    isPagingPrev(){
        if(this.state.paging.prev){
            return (
                <li className="page-item">
                    <a className="page-link" onClick={()=>this.listBoard((this.state.paging.currentPageNum-1))} tabIndex="-1">Previous</a>
                </li>
            );
        }
    }

    isPagingNext(){
        if(this.state.paging.next){
            return(
                <li className="page-item">
                    <a className="page-link" onClick={()=>this.listBoard((this.state.paging.currentPageNum+1))}tabIndex="-1">Next</a>
                </li>
            );
        }
    }
    isMoveToFirstPage() {
        if (this.state.p_num !== 0) {//1
            return (
                <li className="page-item">
                    <a className="page-link" onClick = {() => this.listBoard(1)} >Move to First Page</a>
                </li>
            );
        }
    }
    isMoveToLastPage() {
        if (this.state.p_num !== this.state.paging.pageNumCountTotal) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick = {() => this.listBoard( (this.state.paging.pageNumCountTotal) )} tabIndex="-1">LastPage</a>
                </li>
            );
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">자유게시판</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.createBoard}>글 작성</button> 
                </div>

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
                                this.state.boards.map(
                                    board=>
                                    <tr key ={board.BoardNo}>
                                        <td> <a onClick ={()=> this.readBoard(board.BoardNo)}>{board.Title}</a></td>
                                        <td>{board.Date}</td>
                                        <td>{board.Like}</td>
                                        <td>{board.ID}</td>
                            
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row">
                <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            
                            {
                                this.isMoveToFirstPage()
                            }
                            {
                                this.isPagingPrev()
                            }
                            {
                                this.viewPaging()
                            }
                            {
                                this.isPagingNext()
                            }
                            {
                                this.isMoveToLastPage()
                            }
                        </ul>
                    </nav>

                </div>
            </div>
        );
    }
}

export default ListBoardComponent;