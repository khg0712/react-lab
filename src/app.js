import React, { Component } from "react";
import FormContainer from './js/components/container/FormContainer'
import ExampleContainer from './js/components/container/ExampleContainer'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FormContainer />
        <ExampleContainer />
      </div>
    );
  }
}