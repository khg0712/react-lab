import React, { Component, Suspense } from "react";
// import FormContainer from './components/container/FormContainer'
// import moment from "moment";
import { Card } from 'antd';
import 'antd/dist/antd.css';

const FormContainer = React.lazy(() => import('./components/container/FormContainer'));


export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const moment = await import('moment');
    return (
      <div>
        <Card>
          <Suspense fallback={123}>
            <FormContainer />
            {/* {moment.now()} */}
          </Suspense>
        </Card>
      </div>
    );
  }
}