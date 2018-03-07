import React, { Component } from 'react';
import LikeButton from './demo/LikeButton';
import Computer from './demo/Computer';
import LessonsList from './demo/LessonsList';
import Percentage from './demo/Percentage';

class Demo extends Component {
  render () {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>标题</th>
            <th>内容</th>
            <th>其他</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>点赞</td>
            <td>
              <LikeButton />
              <LikeButton likedText='已赞' unlikedText='赞' />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>computer</td>
            <td>
              <Computer />
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>LessonsList</td>
            <td>
              <LessonsList />
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>Percentage</td>
            <td><Percentage /></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Demo;