import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import Demo from './page/Demo';

import registerServiceWorker from './registerServiceWorker';

function Home() {
  return <div>home</div>
}
function About() {
  return <div>About</div>
}
function Topics() {
  return <div>Topics</div>
}

class Index extends Component {
  render () {
    return (
      <Router>
        <div>
          <App />
          <Demo />
          <ul>
            <li><a href="/home">home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/topics">topics</a></li>
          </ul>
          <Route exact path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
