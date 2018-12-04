import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      foods: [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ],
      input: ""
    }
  }

  updateInput = (e) => this.setState({ input: e.target.value })

  render() {
    const foods = this.state.foods.filter(food => food.includes(this.state.input)).map(food => <p>{food}</p>)
    return (
      <div className="App">
        <input value={this.state.input} onChange={this.updateInput} />
        {foods}
      </div>
    );
  }
}

export default App;
