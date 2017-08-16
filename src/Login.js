import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import $ from 'jquery';
import NoUser from './NoUser';
import IncorrectPw from './IncorrectPw';
import { Button } from 'react-bootstrap';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nouser: false,
      incorrectpw: false
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

  onHandleSuccess() {
    this.props.history.push('/dashboard');
  }

  onHandleNoUser() {
    console.log('line 40');
    //this.props.history.push('/signup');
    this.setState({
      nouser: true
    });
  }

  onHandleIncorrectPw() {
    console.log('line 48');
    this.setState({
      incorrectpw: true
    });
  }

  LogUserIn(e) {
    console.log(this.state);
    e.preventDefault();

    var data = {
      username: this.state.username,
      password: this.state.password
    }

    $.post('/api/login', {
      data: data
    })
    .done(() => {
      console.log('user was logged in');
      this.onHandleSuccess();
    })
    .fail((msg) => {
      //add a second fail method when password is wrong
      console.log('line 72', msg.responseText);
      if (msg.responseText === 'user does not exist, signup please') {
        this.onHandleNoUser();
      } else if (msg.responseText === 'incorrect password') {
        console.log('incorrect password');
        this.onHandleIncorrectPw();
      }
    })
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>Ingredients 20/20</h1>
        </div>
        <div>
          <form className="Button-parent" onSubmit={this.LogUserIn}>
            <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="Email" />
            <input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Password" />
            <Button className="Login-btn" bsStyle="default" type="submit">LOG IN</Button>
          </form>
        </div>
        <div>
          {this.state.nouser ? <NoUser /> : null}
          {this.state.incorrectpw ? <IncorrectPw /> : null}
        </div>
      </div>
    );
  }
}

export default Login;
