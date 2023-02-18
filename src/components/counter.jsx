import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    }

    renderTag() {
        if (this.state.tags.length === 0) return <p>there are no tags !</p>;
        return (<ul>
            {
                this.state.tags.map((tag) => {
                    return <li key={tag}>{tag}</li>
                })
            }
        </ul>)
    }

    render() {

        return (
            <>
                <span className={this.getBtnClasses()}>{this.state.count}</span>
                {this.state.tags.length === 0 && "Add a new tag !"}
                {this.renderTag()}
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