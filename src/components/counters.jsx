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


    render() {

        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter key={counter.id} value={counter.value} >
                        <h2>Compteur N° {counter.id}</h2>
                    </Counter>
                ))}
            </div>
        )
    }
}

export default Counters