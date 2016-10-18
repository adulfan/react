import React from 'react';
import Footer from './components/Footer';
import CounterButton from './components/Button';
import ResetButton from './components/ResetBtn';
import CounterResult from './components/Result';
import logo from './logo.svg';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }
  handleClick(increment) {
    let newCount = this.state.counter + increment;
    this.setState({ counter: newCount });
  }
  resetClick() {
    this.setState({ counter: 0 });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          My React Learning...
        </p>
        <CounterButton localHandleClick={this.handleClick} increment={1} />
        <CounterButton localHandleClick={this.handleClick} increment={5} />
        <CounterButton localHandleClick={this.handleClick} increment={10} />
        <CounterButton localHandleClick={this.handleClick} increment={15} />
        <CounterResult localCounter={this.state.counter} />
        <ResetButton localHandleClick={this.resetClick} />
        <img src={process.env.PUBLIC_URL + '/assets/images/e4f2b2db1af9e44c3aa4792ffa766fab.jpg'} alt="tesing env.property" />
        <Footer dataText="Footer" />
      </div>
    );
  }
}

