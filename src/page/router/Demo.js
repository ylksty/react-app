import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

class Demo extends Component {
  render () {
    const ListItemLink = ({ to, ...rest }) => (
      <Route path={to} children={({ match }) => (
        <li className={match ? 'active' : ''}>
          <Link to={to} {...rest}/>
        </li>
      )}/>
    )
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
          <BrowserRouter basename='/reduxRouter'>
          <tr>
            <td>
              route children
            </td>
            <td colSpan='2'>
              <ul>
                <ListItemLink to="/abc">abc</ListItemLink>
                <ListItemLink to="/cba">cba</ListItemLink>
              </ul>
            </td>
          </tr>
          </BrowserRouter>
          <tr>
            <td>相关资料</td>
            <td>
              <a href="https://reacttraining.com">https://reacttraining.com</a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Todo List</td>
            <td colSpan="2">

            </td>
          </tr>
          <tr>
            <td>prompt</td>
            <td>
              <BrowserRouter basename='/reduxRouter'>
                <div>
                  <Prompt message="Are you sure you want to leave?"/>
                  <Link to="/demo">demo</Link>
                  <Route path="/demo" render={() => <div>demo ha</div>} />
                  <Route path="/home" render={() => <div>home ha</div>} />
                </div>
              </BrowserRouter>
            </td>
            <td>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Demo;