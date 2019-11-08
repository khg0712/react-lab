import React, { Component } from "react";
import FormContainer from './js/components/container/FormContainer'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FormContainer />
      </div>
    );
  }
}