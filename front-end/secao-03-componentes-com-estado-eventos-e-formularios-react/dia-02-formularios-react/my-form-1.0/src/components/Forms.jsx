import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    stackPreferida: "",
    nome: "",
    email: "",
    textArea: "",
    recomendacao: false,
  };

  handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form method="GET">
        <fieldset>
          <legend>Trybe</legend>
          <h1>Qual sua stack preferida ?</h1>
          <select name="stackPreferida" onChange={this.handleChange}>
            <option>Frontend</option>
            <option>Backend</option>
            <option>FullStack</option>
          </select>
          <p></p>
          <label>Nome:</label>
          <input type="text" name="nome" onChange={this.handleChange} />
          <p></p>
          <label>Email:</label>
          <input type="email" name="email" onChange={this.handleChange} />
          <p></p>
          <textarea
            placeholder="Como está sendo sua experiência na Trybe?"
            rows={10}
            cols={30}
            onChange={this.handleChange}
            name="textArea"
          ></textarea>
          <p>{this.state.stackPreferida}</p>
          <button type="submit">Enviar</button>
          <p></p>
          <label>Recomendaria a Trybe a um amigo?</label>
          <input
            type="checkbox"
            name="recomendacao"
            onChange={this.handleChange}
          />{" "}
          Sim
          <input
            type="checkbox"
            name="recomendacao"
            onChange={this.handleChange}
          />{" "}
          Não
          <input type="file" />
        </fieldset>
      </form>
    );
  }
}
