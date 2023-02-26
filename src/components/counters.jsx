import React, { Component } from "react";
import Counter from "./counter";


class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
        ]
    }

    handleIncrement = (childCounter) => {
        let counters = [...this.state.counters]
        const index = counters.indexOf(childCounter)
        counters[index] = { ...childCounter }
        counters[index].value++;
        this.setState({ counters })
    }


    handleReset = (counter) => {
        let counters = this.state.counters.map((counter) => {
            counter.value = 0
            return counter
        })
        this.setState({ counters })
    }

    handleDelete = (id) => {
        let counters = [...this.state.counters]
        counters = counters.filter((counter) => {
            return counter.id !== id
        })
        this.setState({ counters })
    }


    render() {

        return (
            <div>
                <button onClick={this.handleReset}>Reset</button>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}
                    />
                ))}
            </div>
        )
    }
}

export default Counters