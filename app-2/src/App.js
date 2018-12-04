import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      items = ["one", "two", "three"]
    }
  }

  render() {
    const items = this.state.items.map(item => <p>{item}</p>)
    return (
      <div className="App">
        {items}
      </div>
    );
  }
}

export default App;
