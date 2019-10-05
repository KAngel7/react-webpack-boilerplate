import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Header from './header';
import Footer from './footer';
import Home from '../pages/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Header />
        <main className="overflow-hidden">
          <Switch>
            <Route path="/">
              <Home title="Hello from Rgfeact webpack" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
