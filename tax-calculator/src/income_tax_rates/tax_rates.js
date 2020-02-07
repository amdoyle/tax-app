import * as React from "react";
import TaxBrackets from "./tax_brackets";
import Link from "../common/elements/links";
import queryString from "query-string";
import IncomeTax from "./income_tax";

class TaxBracket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grossIncome: queryString.parse(location.search)["gi"],
      taxBracket: [],
      taxesOwed: 0
    };
  }

  componentDidMount() {
    const incomeTax = new IncomeTax(this.state.grossIncome);
    const { taxesOwed, taxBracket } = incomeTax.getTaxBracket();
    this.setState({
      taxBracket,
      taxesOwed
    });
  }

  render() {
    return (
      <div>
        <h2>2019 Tax Rates: </h2>
        <div>Gross Income: {this.state.grossIncome}</div>
        <div>
          Total Nation Income Tax Oweing:
          {this.state.taxesOwed}
        </div>
        <div>Your Tax Rate: </div>
        <ul>
          <TaxBrackets brackets={this.state.taxBracket} />
        </ul>
        <Link linkHref="/" linkText="Check Another Income Level" />
      </div>
    );
  }
}

export default TaxBracket;
