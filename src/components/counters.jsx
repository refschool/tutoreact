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
        console.log('deleted counter ' + id)
    }

    render() {

        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} />
                ))}
            </div>
        )
    }
}

export default Counters