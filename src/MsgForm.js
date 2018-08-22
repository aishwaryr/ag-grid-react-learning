import React, { Component } from "react";

import { addMsgToDB } from "./api";

class MsgForm extends Component {
  state = { input: "" };
  handleChange = input => {
    this.setState({ input: input.target.value });
  };
  submit = e => {
    e.preventDefault();
    addMsgToDB({ msg: this.state.input });
  };
  render() {
    return (
      <div>
        <h4>Enter text here</h4>
        <form onSubmit={e => this.submit(e)}>
          <input type="text" value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MsgForm;
