import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  segunda = () => {
    console.log(this, 'Segunda');
    
  }
  terca = () => {
    console.log(this, 'Terça');
    
  }
  quarta = () => {
    console.log(this, 'Quarta');
    
  }
  render() {
    return (
      <div>
        <button onClick={this.segunda}>Segundoou!!</button>
        <button onClick={this.terca}>Terçoou!!</button>
        <button onClick={this.quarta}>Quartoou!!</button>
      </div>
    )
  }
}

