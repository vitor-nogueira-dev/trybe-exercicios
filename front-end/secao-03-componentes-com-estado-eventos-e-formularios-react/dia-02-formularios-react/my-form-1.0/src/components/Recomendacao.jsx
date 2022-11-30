import React, { Component } from "react";

export default class Recomendacao extends Component {
  render() {
    const { value, handleChange } = this.props;
    const style = value === true ? 'red' : 'blue'
    return (
      <div>
        <label>Recomendaria a Trybe a um amigo?</label>
        <input
          type="checkbox"
          name="recomendacao"
          onChange={handleChange}
          value={value}
        />{" "}
        Sim
        <input
          type="checkbox"
          name="recomendacao"
          onChange={handleChange}
          value={value}
          style={{backgroundColor: 'red'}}
        />{" "}
        Não
      </div>
    );
  }
}
