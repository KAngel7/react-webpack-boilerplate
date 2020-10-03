import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Market from '../pages/Market';
import Trading from '../pages/Trading';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ResetPassword from '../pages/User/ResetPassword';
import Balances from '../pages/Balances';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/trading" exact>
            <Trading />
          </Route>
          <Route path="/markets" exact>
            <Market />
          </Route>
          <Route path="/wallets/balances" exact>
            <Balances />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
