import React from 'react';
import ToDo from './components/todo/todo.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Settings from './components/settings/Settings.js';
import Header from './components/header/header.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <ToDo />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

