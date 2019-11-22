import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import CounterStore from './common/store/CounterStore';
import Counter from './common/components/Counter';

class App extends Component {
  private counterStore: CounterStore = new CounterStore();

  render() {
    return (
      <Router>
        <Link to="/a/a">aa</Link>
        <Provider counter={this.counterStore}>
          <Switch>
            <Route path="/" exact component={Counter} />
            <Route path="/a/a">
              <div>22</div>
            </Route>
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
