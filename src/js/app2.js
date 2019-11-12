import React, { Component, Suspense } from "react";
const FormContainer = React.lazy(() => import('./components/container/FormContainer'));
import 'antd/dist/antd.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoad: false
    }
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>1234</div>}>
          <FormContainer />
        </Suspense>
      </div>
    );
  }
}