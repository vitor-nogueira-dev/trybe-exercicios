import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };
    this.terca = this.terca.bind(this);
  }
  terca = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  };

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <div>
        <button type="button" onClick={this.terca}>
          {numeroDeCliques}
        </button>
      </div>
    );
  }
}
