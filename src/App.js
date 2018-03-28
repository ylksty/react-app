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
import ReactRouter from './page/ReactRouter';
import ReduxDemo from './page/redux/Demo';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
                <li><Link to="/reactRouter">react-router</Link></li>
                <li><Link to="/redux">Redux</Link></li>
              </ul>
              <Route path="/demo" component={Demo}/>
              <Route path="/reactRouter" component={ReactRouter} />
              <Route path="/redux" store={store} component={ReduxDemo} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
