import React, { Component } from 'react'
import User from './User'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: [],
      age: 0,

    }
  }

  async componentDidMount() {
    this.setState(
      { loading: true },
      async () => {
      const requestFetch = await fetch('https://api.randomuser.me/')
      const requestResponse = await requestFetch.json();
      this.setState({
        loading: false,
        user: requestResponse.results,
      });
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const age = 50;
    if (nextState.user.some((user) => user.dob.age > age ))return false;
    return true;
  }
  render() {
    return (
      <div className="App">
        <User { ...this.state }/>
      </div>
    )
  }
}
