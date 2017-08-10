import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


