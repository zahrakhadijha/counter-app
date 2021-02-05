import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <button>+</button>
        <span>{this.state.count}</span>
        <button>-</button>
      </>
    )
  }
}

export default App
