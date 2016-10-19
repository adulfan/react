import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer"><p>{this.props.dataText}</p></footer>
    )
  }
}

