import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

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
      <>
        <NavBar count={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    )
  }
}

export default App;
