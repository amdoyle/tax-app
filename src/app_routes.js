import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import PageLayout from "./page_layouts/page_layout";
import IncomeTaxForm from "./income_tax_form/tax_form";
import TaxBracket from "./income_tax_rates/tax_brackets";

const PageLayoutWithRouter = withRouter(props => <PageLayout {...props} />);

const AppRoutes = () => {
  return (
    <Router>
      <PageLayoutWithRouter>
        <Switch>
          <Route exact path="/" component={IncomeTaxForm} />
          <Route path="/2019" component={TaxBracket} />
        </Switch>
      </PageLayoutWithRouter>
    </Router>
  );
};

export default AppRoutes;
