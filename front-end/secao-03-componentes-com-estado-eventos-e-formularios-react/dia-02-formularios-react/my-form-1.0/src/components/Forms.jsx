import React, { Component } from "react";
import DadosPessoais from "./DadosPessoais";
import Recomendacao from "./Recomendacao";
import StackPreferida from "./StackPreferida";
import TextArea from "./TextArea";

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
          <StackPreferida
            value={this.state.stackPreferida}
            handleChange={this.handleChange}
          />
          <p></p>
          <DadosPessoais
            nome={this.state.nome}
            email={this.state.email}
            handleChange={this.handleChange}
          />
          <TextArea
            value={this.state.textArea}
            handleChange={this.handleChange}
          />
          <p>{this.state.textArea}</p>
          <button type="submit">Enviar </button>
          <p></p>

          <Recomendacao
            value={this.state.recomendacao}
            handleChange={this.handleChange}
          />
          <input type="file" />
        </fieldset>
      </form>
    );
  }
}
