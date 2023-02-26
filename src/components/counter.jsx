import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    }

    handleIncrement = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    render() {

        return (
            <div>
                <div className={this.getBtnClasses()}>{this.state.value}</div>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        )
    }




    getBtnClasses() {
        let classes = "m-2 btn btn-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

}

export default Counter;