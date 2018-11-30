import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component {

  constructor() {
    super()
    this.state = {
      tasks: [],
      input: ""
    }
  }

  updateInput = (e) => this.setState({ input: e.target.value })

  addTask = () => {
    const tasks = [...this.state.tasks, this.state.input]
    this.setState({ tasks, input: "" })
  }

  render() {
    return (
      <div className="App">
        <Todo 
          addTask={this.addTask}
          tasks={this.state.tasks}
          input={this.state.input}
          updateInput={this.updateInput}
        />
      </div>
    );
  }
}

export default App;
