import React, { Component } from 'react';

class Demo extends Component {
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
                <a href="https://cn.redux.js.org/">https://cn.redux.js.org/</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>Todo List</td>
              <td colSpan="2"></td>
            </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default Demo;