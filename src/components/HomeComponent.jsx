import React, { Component } from 'react';

class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boards: []
        }
        
    }

    GotoCategory(){
        this.props.history.push('/category-board/자유게시판');
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <table>
                    <tbody>
                        <td>
                            HOT 게시물
                        </td>
                        <td>
                            <a onClick={()=>this.GotoCategory()}>자유게시판</a>
                            
                        </td>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HomeComponent;