import React from 'react';

export default class CounterResult extends React.Component {
  render() {
    return (
      <p>{this.props.localCounter}</p>
    );
  }
}