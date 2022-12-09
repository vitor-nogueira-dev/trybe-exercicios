import React, { Component } from 'react'
import User from './User'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: [],
      age: false,
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
        age: requestResponse.results.some((user) => user.dob.age > 50)
      }); 
    });
  }

  shouldComponentUpdate(_nextProps, _nextState) {
    const { age } = this.state;
    return !(age);
  }
  // true ou false

  render() {
    return (
      <div className="App">
        <User { ...this.state }/>
      </div>
    )
  }
}
