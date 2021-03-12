import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (id) => {
    const counters = [...this.state.counters];
    //const index = counters.indexOf(counter);
    counters[id - 1].value++;
    this.setState({ counters });
  };
  handleDecrement = (id) => {
    const counters = [...this.state.counters];
    //const index = counters.indexOf(counter);
    counters[id - 1].value--;
    this.setState({ counters });
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((item) => item.id !== id);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button className='btn btn-info mb-2' onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map((item) => (
          <Counter
            key={item.id}
            id={item.id}
            value={item.value}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
