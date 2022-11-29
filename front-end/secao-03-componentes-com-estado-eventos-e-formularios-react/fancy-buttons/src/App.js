import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    // Essa é uma forma de declarar o estado inicial, é necessário que ela esteja dentro do escopo do constructor
    // this.state = { 
    //   numeroDeCliques: 0,
    // };
    this.terca = this.terca.bind(this);
  }
  // Essa é outra forma de declarar o estado inicial, mais simples e menos verbosa. Ela é utilizada fora do escopo do constructor();
  state = {
    numeroDeCliques: 0,
  };

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
