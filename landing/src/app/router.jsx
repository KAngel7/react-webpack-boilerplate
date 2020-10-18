import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthContext } from '../services/context';

import Home from '../pages/Home';
import Market from '../pages/Market';
import Trading from '../pages/Trading';
import Balances from '../pages/Balances';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Deposits from '../pages/Deposits';
import Withdrawal from '../pages/Withdraw';
import Order from '../pages/Orders';
import TransactionsHistory from '../pages/TransactionsHistory';
import Profile from '../pages/Profile';

const AppRouter = () => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/trading/:pair?">
          <Trading />
        </Route>
        <Route path="/markets" exact>
          <Market />
        </Route>
        {authenticated ? (
          <>
            <Route path="/wallets/balances" exact>
              <Balances />
            </Route>
            <Route path="/wallets/deposits" exact>
              <Deposits />
            </Route>
            <Route path="/wallets/withdrawals" exact>
              <Withdrawal />
            </Route>
            <Route path="/wallets/orders" exact>
              <Order />
            </Route>
            <Route path="/wallets/transactions" exact>
              <TransactionsHistory />
            </Route>
            <Route path="/settings/profile" exact>
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
