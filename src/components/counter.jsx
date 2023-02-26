import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {


    render() {

        return (
            <div>
                <div className={this.getBtnClasses()}>{this.props.counter.value}</div>
                <button onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        )
    }

    getBtnClasses() {
        let classes = "m-2 btn btn-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

}

export default Counter;