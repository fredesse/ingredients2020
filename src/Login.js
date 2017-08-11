import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Login extends Component {
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
