import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './style';
import Home from '../pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <main className={style.main}>
          <Switch>
            <Route path="/">
              <Home title="Progress Bars Demo" />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
