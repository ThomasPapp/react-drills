import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      input: ""
    }
  }

  updateInput = (e) => this.setState({ input: e.target.value })

  render() {
    return (
      <div className="App">
        <input value={this.state.input} onChange={this.updateInput} />
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
