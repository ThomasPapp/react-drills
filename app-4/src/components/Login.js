import React, { Component } from 'react'

export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    alert = () => alert(`Username: ${this.state.username} Password: ${this.state.password}`)

    render = () => (
        <div>
            <input 
                defaultValue="Username"
                value={ this.state.username }
                onChange={ (e) => this.setState({ username: e.target.value }) }
            />

            <input 
                type="password"
                defaultValue="Username"
                value={ this.state.password }
                onChange={ (e) => this.setState({ password: e.target.value }) }
            />

            <button onClick={ this.alert }>Login</button>
        </div>
    );
}