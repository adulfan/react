import React from 'react';

export default class CounterButton extends React.Component {
  constructor() {
    super();
    this.localHandleClick = this.localHandleClick.bind(this);
  }
  localHandleClick() {
   this.props.localHandleClick(this.props.increment);
  }
  render() {
    return (
      <button onClick={this.localHandleClick}>+ {this.props.increment}</button>
    );
  }
}