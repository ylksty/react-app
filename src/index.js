import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore'

import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

class Index extends Component {
  render () {
    return (
      <div>
        <App store={store}/>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
