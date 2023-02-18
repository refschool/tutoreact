import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        count: 0,
    }

    render() {

        return (
            <>

                <span className={this.getBtnClasses()}>{this.state.count}</span>
            </>
        )
    }




    getBtnClasses() {
        let classes = "m-2 btn btn-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;