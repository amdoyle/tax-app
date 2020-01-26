import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import PageLayout from "./page-layouts/page-layout";

const PageLayoutWithRouter = withRouter(props => <PageLayout />);

const AppRoutes = () => {
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

export default AppRoutes;
