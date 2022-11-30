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
    formularioComErros: true,
  };

  handleError = () => {
    const { stackPreferida, nome, email, textArea, recomendacao } = this.state;

    const errorCases = [
      !stackPreferida,
      !nome.length,
      !email.match(/^\S+@\S+$/i),
      !textArea.length,
      !recomendacao,
    ]

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({formularioComErros: !formularioPreenchido})
  }
  handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value 
    }, this.handleError);
  };

  render() {
    const { stackPreferida, nome, email, textArea, recomendacao } = this.state;
    return (
      <form method="GET">
        <fieldset>
          <legend>Trybe</legend>
          <StackPreferida
            value={stackPreferida}
            handleChange={this.handleChange}
          />
          <p></p>
          <DadosPessoais
            nome={nome}
            email={email}
            handleChange={this.handleChange}
          />
          <TextArea
            value={textArea}
            handleChange={this.handleChange}
          />
          <p>{textArea}</p>
          <button type="submit">Enviar </button>
          <p></p>

          <Recomendacao
            value={recomendacao}
            handleChange={this.handleChange}
          />
          <input type="file" />
        </fieldset>
      </form>
    );
  }
}
