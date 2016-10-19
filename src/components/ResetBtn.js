import React from 'react';

export default class ResetButton extends React.Component {
  constructor(props) {
    super(props);
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
      <button className="btn green" onClick={this.localHandleClick}>Reset</button>
    );
  }
}