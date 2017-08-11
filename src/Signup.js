import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './App.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitUser = this.submitUser.bind(this);
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

  submitUser(e) {
    console.log(this.state);
    e.preventDefault();

    var data = {
      username: this.state.username,
      password: this.state.password
    }
/*    $.ajax({
      url: 'http://localhost:3000/api/user',
      type: 'POST',
      data: data
    })*/

    $.post('/api/signup', {
      data: data
    })
    .done((str) => {
      console.log('line 50', str);
      this.onHandleLogin();
    })
    .fail(function() {
      console.log('Signup failed');
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
      </div>
    );
  }
}

export default Signup;
