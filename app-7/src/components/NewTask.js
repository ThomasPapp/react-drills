import React, { Component } from 'react'

export default class NewTask extends Component {

    constructor() {
        super()
        this.state ={
            input: ""
        }
    }

    handleClick = () => {
        this.props.addTask(this.state.input)
        // reset the input
        this.setState(({ input: "" }))
    }

    render = () => (
        <div>
            
            <input 
                placeholder="Enter new task"
                value={this.state.input}
                onChange={ (e) => this.setState({ input: e.target.value }) }
            />

            <button onClick={ this.handleClick }>Add</button>

        </div>
    )

}