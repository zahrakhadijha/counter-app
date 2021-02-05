import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  handlePlus = () => {
    const newCount = this.state.count + 1
    this.setState({
      count: newCount,
    })
  }

  handleMinus = () => {
    console.log('clicked minus')
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
