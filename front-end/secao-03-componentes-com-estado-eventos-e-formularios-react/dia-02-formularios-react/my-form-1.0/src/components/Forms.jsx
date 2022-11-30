import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    stackPreferida: '',
    nome: '',
    email: '',
    textArea: '',
  };

  handleTextArea = (event) => {
    this.setState({stackPreferida: event.target.value})
  }
  render() {
    return (
      <form method="GET">
        <h1>Qual sua stack preferida ?</h1>
        <select name="stackPreferida">
          <option value="">Frontend</option>
          <option value="">Backend</option>
          <option value="">FullStack</option>
        </select>
        <p></p>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" />
        <p></p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <p></p>
        <textarea placeholder="Como está sendo sua experiência na Trybe?" rows={10} cols={30} onChange={this.handleTextArea}></textarea>
        <p>{this.state.stackPreferida}</p>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}
