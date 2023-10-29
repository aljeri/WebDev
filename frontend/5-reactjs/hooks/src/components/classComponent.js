import React, { Component } from 'react';
//not anymore recommended - use functional component instead with Hooks!
class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h4>Count Class: {this.state.count}</h4>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;


/*componentDidMount() {
  console.log('Mounting: Component Did Mount');
}

componentDidUpdate(prevProps, prevState) {
  console.log('Updating: Component Did Update');
  console.log(`Previous State: ${prevState.count}, Current State: ${this.state.count}`);
}

componentWillUnmount() {
  console.log('Unmounting: Component Will Unmount');
}*/