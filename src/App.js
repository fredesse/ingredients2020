import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Dashboard from './Dashboard';
import './App.css';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter history={history} component={App}>
          <Switch>
            <Route path="/" exact render={(props) => <Landing auth={auth} {...props} />} />
            <Route path="/dashboard" exact render={(props) => <Dashboard auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
