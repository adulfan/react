import React from 'react';
import Footer from './components/Footer';
import CounterButton from './components/Button';
import ResetButton from './components/ResetBtn';
import CounterResult from './components/Result';
import CommentBox from './components/CommentBox';
import logo from './logo.svg';
import _ from 'lodash';

class BaseComponent extends React.Component {
  bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
}

export default class App extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.bind('handleClick', 'resetClick');
  }
  handleClick(increment) {
    let newCount = this.state.counter + increment;
    this.setState({ counter: newCount });
  }
  resetClick() {
    this.setState({ counter: 0 });
  }
  renderButtons() {
    return _.times(5, (i) => {
      return (<CounterButton key={i} localHandleClick={this.handleClick} increment={(i === 0) ? 1 : i * 5} />);
      }
    );
  }
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          My React Learning!!!
        </p>
        <div className="app-content">
          <section className="button-wrapper">
            {this.renderButtons()}
            <CounterResult localCounter={this.state.counter} />
            <ResetButton localHandleClick={this.resetClick} />
          </section>
          <img src={process.env.PUBLIC_URL + '/assets/images/e4f2b2db1af9e44c3aa4792ffa766fab.jpg'} alt="tesing env.property" width="300" />
          <CommentBox />
        </div>
        <Footer dataText="Footer" />
      </div>
    );
  }
}

