import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        count: 0,
    }

    constructor() {
        super();
        //une méthode parmis d'autres
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div className={this.getBtnClasses()}>{this.state.count}</div>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }




    getBtnClasses() {
        let classes = "m-2 btn btn-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

}

export default Counter;