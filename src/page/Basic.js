import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super(props);
    let res1 = UserBox({firstName: 'Joseph', lastName: 'Jenkins'})
    console.log(res1)
  }
  render () {
    let Transformation = NameBox('Joseph')
    Transformation = JSON.stringify(Transformation, null, '   ')
    let Abstraction = FancyUserBox({firstName: 'Joseph', lastName: 'Jenkins'})
    Abstraction = JSON.stringify(Abstraction, null, '   ')
    let Composition = UserBox({firstName: 'Joseph', lastName: 'Jenkins'})
    Composition = JSON.stringify(Composition, null, '   ')
    let Memoization = NameAndAgeBox({firstName: 'Joseph', lastName: 'Jenkins', dateOfBirth: '1987'}, 2018)
    Memoization = JSON.stringify(Memoization, null, '   ')
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
            <td>Transformation</td>
            <td>
              <textarea cols="40" rows="10" value={Transformation} readOnly/>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Abstraction</td>
            <td><textarea cols="40" rows="10" value={Abstraction} readOnly/></td>
            <td></td>
          </tr>
          <tr>
            <td>Composition</td>
            <td><textarea cols="40" rows="10" value={Composition} readOnly/></td>
            <td></td>
          </tr>
          <tr>
            <td>State</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Memoization</td>
            <td><textarea cols="40" rows="12" value={Memoization} readOnly/></td>
            <td></td>
          </tr>
          <tr>
            <td>List</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Continuations 连续性</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

function NameBox(name) {
  return { fontWeight: 'bold', labelContent: name };
}

function FancyUserBox(user) {
  return {
    borderStyle: '1px solid blue',
    childContent: [
      'Name: ',
      NameBox(user.firstName + ' ' + user.lastName)
    ]
  };
}

function FancyBox(children) {
  return {
    borderStyle: '1px solid blue',
    children: children
  };
}

function UserBox(user) {
  return FancyBox([
    'Name: ',
    NameBox(user.firstName + ' ' + user.lastName)
  ]);
}

function memoize(fn) {
  var cachedArg;
  var cachedResult;
  return function(arg) {
    if (cachedArg === arg) {
      return cachedResult;
    }
    cachedArg = arg;
    cachedResult = fn(arg);
    return cachedResult;
  };
}

var MemoizedNameBox = memoize(NameBox);

function NameAndAgeBox(user, currentTime) {
  return FancyBox([
    'Name: ',
    MemoizedNameBox(user.firstName + ' ' + user.lastName),
    'Age in milliseconds: ',
    currentTime - user.dateOfBirth
  ]);
}

export default Demo;