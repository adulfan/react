import React from 'react';

export default class CounterButton extends React.Component {
  localHandleClick() {
   this.props.localHandleClick(this.props.increment);
  }
  render() {
    return (
      <button onClick={this.localHandleClick.bind(this)}>+ {this.props.increment}</button>
    );
  }
}