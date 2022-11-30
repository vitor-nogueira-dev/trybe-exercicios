import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.one = this.one.bind(this);
    this.two = this.two.bind(this);
    this.three = this.three.bind(this);

    // Essa é uma forma de declarar o estado inicial, é necessário que ela esteja dentro do escopo do constructor
    // this.state = {
    //   one: 0,
    //   two: 0,
    //   three: 0,
    // };
  }
  // Essa é outra forma de declarar o estado inicial, mais simples e menos verbosa. Ela é utilizada fora do escopo do constructor();
  state = {
    one: 0,
    two: 0,
    three: 0,
  };

  quantidadeDeCliques(num) {
    if (num === 0) {
      return "white";
    }
    return num % 2 === 0 ? "green" : "white";
  }
  one() {
    const { one } = this.state;
    this.setState(
      ({ one }) => ({
        one: one + 1,
      }),
      () => {
        console.log(`Botão 1 ${this.quantidadeDeCliques(one)}`);
      }
    );
  }
  two() {
    const { two } = this.state;
    this.setState(
      ({ two }) => ({
        two: two + 1,
      }),
      () => {
        console.log(`Botão 2 ${this.quantidadeDeCliques(two)}`);
      }
    );
  }
  three() {
    const { three } = this.state;
    this.setState(
      ({ three }) => ({
        three: three + 1,
      }),
      () => {
        console.log(`Botão 3 ${this.quantidadeDeCliques(three)}`);
      }
    );
  }
  render() {
    const { one, two, three } = this.state;
    return (
      <div>
        <button
          style={{ backgroundColor: this.quantidadeDeCliques(one) }}
          onClick={this.one}
        >{`Cliques no botão 1: ${one}`}</button>
        <button
          style={{ backgroundColor: this.quantidadeDeCliques(two) }}
          onClick={this.two}
        >{`Cliques no botão 2: ${two}`}</button>
        <button
          style={{ backgroundColor: this.quantidadeDeCliques(three) }}
          onClick={this.three}
        >{`Cliques no botão 3: ${three}`}</button>
      </div>
    );
  }
}
