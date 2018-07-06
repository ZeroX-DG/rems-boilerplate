import React from 'react'
import './main.sass'

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  increase () {
    const { counter } = this.state
    const newCount = counter + 1
    this.setState({ counter: newCount })
  }

  decrease () {
    const { counter } = this.state
    const newCount = counter - 1
    this.setState({ counter: newCount })
  }

  render () {
    const { counter } = this.state
    return (
      <div className='wrapper'>
        <h1>{counter}</h1>
        <div className='tools'>
          <button onClick={() => this.increase()}>+</button>
          <button onClick={() => this.decrease()}>-</button>
        </div>
      </div>
    )
  }
}
