import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.LogUserIn = this.LogUserIn.bind(this);
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  LogUserIn(e) {
    console.log(this.state);
    e.preventDefault();

    var data = {
      username: this.state.username,
      password: this.state.password
    }

    $.post('http://localhost:8000/api/users', {
      data: data
    })
    .done(() => {
      console.log('user was logged in')
    })
    .fail(() => {
      console.log('Login failed')
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to Ingredients 20/20</h2>
        </div>
        <form onSubmit={this.LogUserIn}>
          <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="Email" />
          <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Password" />
          <input type="submit" value="Submit"/>
        </form>
        <div>
          <Link to="/signup">SIGN UP</Link>
        </div>
      </div>
    );
  }
}

export default Login;
