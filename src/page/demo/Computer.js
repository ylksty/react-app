import React, { Component } from 'react';

class Computer extends Component {
  constructor () {
    super()
    this.state={
      status: 'off',
      showContent: '显示器关了'
    }
  }
  handlePower () {
    this.setState((preState) => {
      if (preState.status === 'off') {
        return { status: 'on'}
      } else {
        return { status: 'off'}
      }
    });
    this.setState((preState) => {
      if (preState.status === 'off') {
        return { showContent: '显示器关了'}
      } else {
        return { showContent: '显示器亮了'}
      }
    })
  }
  render () {
    return (
      <div>
        <Screen showContent={this.state.showContent} />
        <button onClick={this.handlePower.bind(this)}>开关</button>
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = {
    showContent: '无内容'
  }
  render () {
    return (
      <div className='screen'>{this.props.showContent}</div>
    )
  }
}

export default Computer;