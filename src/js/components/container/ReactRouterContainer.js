import React, { Component, lazy, Suspense } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const OtherComponent = lazy(() => import('../presentational/OtherComponent'));

class ReactRouterContainer extends Component {


  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/other">other</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Suspense fallback={"loading"}>
            <Switch>
              <Route path="/other" component={OtherComponent} />
              <Route path="/">
                home
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default ReactRouterContainer;