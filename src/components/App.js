import React, { Component } from 'react';

const App = () => (<Counter></Counter>);

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ""
    };
  }

  handlePlusButton = () => {
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1, message: "" });
    } else {
      this.setState({ message: "count can only be raised to 10" });
    }
  };

  handleMinusButton = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1, message: "" });
    } else {
      this.setState({ message: "count can only be lowered to 0" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={ this.handlePlusButton}>+1</button>
        <button onClick={ this.handleMinusButton}>-1</button>
        <p>{ this.state.message }</p>
      </React.Fragment>
    );
  }
}

export default App;
