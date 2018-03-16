import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Demo from './page/Demo';
import ReactRouter from './page/ReactRouter';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <ul className="ul-list">
              <li><Link to="/">首页</Link></li>
              <li><Link to="/demo">demo</Link></li>
              <li><Link to="/ReactRouter">react-router</Link></li>
            </ul>
            <Route path="/demo" component={Demo}/>
            <Route path="/reactRouter" component={ReactRouter}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
