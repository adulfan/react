import React from 'react';

export default class ResetButton extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.localHandleClick = this.localHandleClick.bind(this);
  }
  localHandleClick() {
    this.props.localHandleClick(this.props.counter);
  }
  render() {
    return (
      <button onClick={this.localHandleClick}>Reset</button>
    );
  }
}