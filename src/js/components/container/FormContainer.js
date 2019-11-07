import React, { Component } from "react";
import Input from '../presentational/Input'

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }

  onChangeInput = (event) => {
    this.setState({
      title: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Input value={this.state.title} onChangeInput={this.onChangeInput}/>
      </div>
    );
  }
}
export default FormContainer;