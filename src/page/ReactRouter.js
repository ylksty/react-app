import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom'

import loadAbout from 'bundle-loader?lazy?./loadAbout.bundle.js';
import loadDashboard from 'bundle-loader?lazy?./loadDashboard.bundle.js';

class ReactRouter extends Component {
  render () {
    return (
      <div>
        <table border="1" width="800">
          <thead>
            <tr>
              <th>标题</th>
              <th>内容</th>
              <th>其他</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>相关资料</td>
              <td>
                <a href="http://reacttraining.cn/web/example/basic">reacttraining.cn</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>demo</td>
              <td colSpan="2"><App /></td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

export default ReactRouter;


// let loadAbout = require('./loadAbout.bundle.js');
// let loadDashboard = require('./loadDashboard.bundle.js');

// components load their module for initial visit
const About = () => (
  <Bundle load={loadAbout}>
    {(About) => { console.log(About); return (<h1>222</h1>)}}
  </Bundle>
)

const Dashboard = () => (
  <Bundle load={loadDashboard}>
    {(Dashboard) => <Dashboard/>}
  </Bundle>
)

class App extends React.Component {
  componentDidMount() {
    // preloads the rest
    loadAbout(() => {})
    // loadDashboard(() => {})
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <Link to="/ReactRouter/about">about</Link>
        <Route path="/ReactRouter/about" component={About}/>
        <Route path="/ReactRouter/dashboard" component={Dashboard}/>
      </div>
    )
  }
}


class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    console.log(props);
    this.setState({
      mod: null
    })
    props.load((mod) => {
      console.log(mod);
      console.log(2222);
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.children(this.state.mod)
  }
}
