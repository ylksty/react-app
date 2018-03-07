import React, { Component } from 'react';

class Input extends Component {
  handleChange (e) {
    this.props.onSub(e.target.value);
  }
  render () {
    return (
      <div>
        <input type='number' value={this.props.num} onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    let num = (this.props.num*100).toFixed(2);
    return (
      <div>{`${num}%`}</div>
    )
  }
}

class PercentageApp extends Component {
  constructor () {
    super();
    this.state = {
      num: ''
    }
  }
  handleSubmit (num) {
    this.setState({
      num
    })
  }
  render () {
    return (
      <div>
        <Input num={this.state.num} onSub={this.handleSubmit.bind(this)} />
        <PercentageShower num={this.state.num}/>
      </div>
    )
  }
}

export default PercentageApp;