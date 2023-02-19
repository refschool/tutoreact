import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log('setstate')
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state)// à ce stade le state n'est pas muté
    }

    render() {

        return (
            <>
                <span className={this.getBtnClasses()}>{this.state.count}</span>
                {this.state.tags.length === 0 && "Add a new tag !"}
                {this.renderTag()}
                <button onClick={this.handleClick}>Increment</button>
            </>
        )
    }




    getBtnClasses() {
        let classes = "m-2 btn btn-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
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
}

export default Counter;