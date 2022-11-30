import React, { Component } from "react";

export default class TextArea extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <textarea
          placeholder="Como está sendo sua experiência na Trybe?"
          rows={10}
          cols={30}
          onChange={handleChange}
          value={value}
          name="textArea"
        />
      </div>
    );
  }
}
