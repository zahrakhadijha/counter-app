import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  // make an arrow function so we have access to 'this' within the method
  handlePlus = () => {
    // create variable to change state
    // we can't use this.state within setState because this.setState is asynchronous
    const newCount = this.state.count + 1
    // setState updates a key in state and the updates the page to reflect that update
    this.setState({
      count: newCount,
    })
  }

  
  handleMinus = () => {
    const newCount = this.state.count - 1
    this.setState({
      count: newCount,
    })
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <button onClick={this.handlePlus}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleMinus}>-</button>
      </>
    )
  }
}

export default App
