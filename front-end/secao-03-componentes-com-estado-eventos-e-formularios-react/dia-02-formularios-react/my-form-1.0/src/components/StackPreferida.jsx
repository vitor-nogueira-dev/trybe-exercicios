import React, { Component } from "react";

export default class StackPreferida extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <h1>Qual sua stack preferida ?</h1>
        <select
          name="stackPreferida"
          onChange={handleChange}
          value={value}
        >
          <option>Frontend</option>
          <option>Backend</option>
          <option>FullStack</option>
        </select>
      </div>
    );
  }
}
