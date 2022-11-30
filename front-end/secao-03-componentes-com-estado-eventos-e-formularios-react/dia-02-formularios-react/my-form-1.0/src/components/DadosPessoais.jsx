import React, { Component } from "react";

export default class DadosPessoais extends Component {
  render() {
    const { nome, email, handleChange } = this.props;
    return (
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          name="nome" 
          onChange={handleChange} 
          value={nome} />
        <p></p>

        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>
    );
  }
}
