import React, { Component, lazy, Suspense } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import 'antd/dist/antd.css';

const OtherComponent = lazy(() => import('../presentational/OtherComponent'));
const Card = lazy(() => import('../presentational/Card'));
const Calendar = lazy(() => import('../presentational/Calendar'));
const Rate = lazy(() => import('../presentational/Rate'));

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
              <li>
                <Link to="/card">card</Link>
              </li>
              <li>
                <Link to="/calendar">calendar</Link>
              </li>
              <li>
                <Link to="/rate">rate</Link>>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Suspense fallback={"loading"}>
            <Switch>
              <Route path="/other" component={OtherComponent} />
              <Route path="/card" component={Card} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/rate" component={Rate}/>
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