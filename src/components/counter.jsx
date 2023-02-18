import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    render() {

        return (
            <>
                <span className={this.getBtnClasses()}>{this.state.count}</span>
                <ul>
                    {
                        this.state.tags.map((tag) => {
                            return <li key={tag}>{tag}</li>
                        })
                    }
                </ul>
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