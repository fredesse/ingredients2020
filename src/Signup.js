import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import UserExists from './UserExists';
import './App.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userexists: false
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.onUserExists = this.onUserExists.bind(this);
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

  onHandleLogin() {
    this.props.history.push('/dashboard');
  }

  onUserExists() {
    this.setState({
      userexists: true
    });
  }

  submitUser(e) {
    console.log(this.state);
    e.preventDefault();

    var data = {
      username: this.state.username,
      password: this.state.password
    }

    $.post('/api/signup', {
      data: data
    })
    .done((str) => {
      console.log('line 50', str);
      this.onHandleLogin();
    })
    .fail(() => {
      console.log('Incorrect password');
      this.onUserExists();
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to Ingredients 20/20</h2>
        </div>
        <form onSubmit={this.submitUser} >
          <input type="text" value={this.state.username} onChange={this.handleUsername} />
          <input type="password" value={this.state.password} onChange={this.handlePassword}/>
          <input type="submit" value="Submit"/>
        </form>
        <div>
          {this.state.userexists ? <UserExists /> : null}
        </div>
      </div>
    );
  }
}

export default Signup;
