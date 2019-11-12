import React, { Component, Suspense } from "react";
// import FormContainer from './components/container/FormContainer'
const FormContainer = React.lazy(() => import('./components/container/FormContainer'));
import 'antd/dist/antd.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>123</div>}>
          <FormContainer/>
        </Suspense>
      </div>
    );
  }
}