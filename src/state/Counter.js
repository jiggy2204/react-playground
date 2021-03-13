import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    countUp: 1,
  };

  handleButtonClick = () => {
    const newCount = this.state.count + this.state.countUp;
    this.setState({
      count: newCount,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <p>The current count: {count}</p>
        <button onClick={this.handleButtonClick}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
