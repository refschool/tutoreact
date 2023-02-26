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

    handleDelete = (id) => {
        let counters = this.state.counters.filter((counter) => {
            return counter.id !== id
        })
        this.setState({ counters })
    }

    render() {

        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                    />
                ))}
            </div>
        )
    }
}

export default Counters