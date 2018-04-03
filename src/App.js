import React, { Component } from 'react';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Demo from './page/Demo';
import ReduxDemo from './page/redux/Demo';
import RouterDemo from './page/router/Demo';

const store = configureStore()

class App extends Component {
  getConfirmation (message, callback) {
    // const allowTransition = window.confirm(message)
    // callback(allowTransition)
  }
  render() {
    return (
      <Provider store={store}>
        <Router getUserConfirmation={this.getConfirmation('abc', function(s) {alert(s);})}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-intro">
              <ul className="ul-list">
                <li><Link to="/">首页</Link></li>
                <li><Link to="/demo">demo</Link></li>
                <li><Link to="/redux">Redux</Link></li>
                <li><Link to="/reduxRouter">ReduxRouter</Link></li>
              </ul>
              <Route path="/demo" component={Demo}/>
              <Route path="/redux" store={store} component={ReduxDemo} />
              <Route path="/reduxRouter" store={store} component={RouterDemo} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
