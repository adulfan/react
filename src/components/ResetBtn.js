import React from 'react';

export default class ResetButton extends React.Component {
  render() {
    return (
      <button className="btn-blue" onClick={this.props.localHandleClick.bind(this)}>Reset</button>
    );
  }
}