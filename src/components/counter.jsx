import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-1'>
          <h3>
            <span className={this.getBadgeClass(this.props.value)}>
              {this.getValueFormat(this.props.value)}
            </span>
          </h3>
        </div>
        <div className='col'>
          <button
            className='btn btn-secondary '
            onClick={() => this.props.onIncrement(this.props.id)}
          >
            <i className='fa fa-plus' aria-hidden='true'></i>
          </button>
          <button
            className='btn btn-secondary  mr-2 ml-2'
            disabled={!this.props.value ? true : false}
            onClick={() => this.props.onDecrement(this.props.id)}
          >
            <i className='fa fa-minus' aria-hidden='true'></i>
          </button>
          <button
            className='btn btn-danger '
            onClick={() => this.props.onDelete(this.props.id)}
          >
            <i className='fa fa-trash' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    );
  }
  getBadgeClass(value) {
    return value ? "badge badge-primary" : "badge badge-warning";
  }
  getValueFormat(value) {
    return value ? value : "Zero";
  }
}

export default Counter;
