// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="countContainer">
        <h1 className="mainHeading">
          The button has been clicked
          <br /> <span className="counter">{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button className="button" onClick={this.increaseCount}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
