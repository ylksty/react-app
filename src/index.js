import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './page/Demo';

import registerServiceWorker from './registerServiceWorker';

class Index extends Component {
  render () {
    return (
      <div>
        <App />
        <Demo />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
