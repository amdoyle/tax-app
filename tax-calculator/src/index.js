import ReactDOM from "react-dom";
import * as React from "react";
import PageLayout from "./page-layouts/page-layout";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

const PageLayoutWithRouter = withRouter(props => <PageLayout />);

const Routes = () => {
  return (
    <Router>
      <PageLayoutWithRouter>
        <Switch>
          <Route exact path="/" />
          <Route path="/2019/tax-rates " />
        </Switch>
      </PageLayoutWithRouter>
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("app"));
