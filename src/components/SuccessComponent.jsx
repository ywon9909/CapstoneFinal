import React, { Component } from 'react';

class SuccessComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    goToList() {
        this.props.history.push('/board');
    }
    render() {
        return (
            <div className="text-center">
                <h2>Success</h2>
            </div>
        );
    }
}

export default SuccessComponent;