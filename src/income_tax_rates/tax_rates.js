import * as React from "react";
import TaxBrackets from "./tax_brackets";
import Link from "../common/elements/links";
import queryString from "query-string";
import IncomeTax from "./income_tax";
import { SectionHeader, SectionLabel } from "../common/elements/common-styles";

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
        <SectionHeader title={"2019 Tax Rates"} />
        <div>
          <SectionLabel
            title={"Gross Income:"}
            value={this.state.grossIncome}
          />
        </div>
        <div>
          <SectionLabel
            title={"Total Nation Income Tax Oweing:"}
            value={this.state.taxesOwed}
          />
        </div>
        <div>
          <SectionLabel title={"Your Tax Rate:"} value={this.state.taxesOwed} />
        </div>
        <SectionLabel title={"Your Tax Bracket:"} value={""} />
        <ul>
          <TaxBrackets brackets={this.state.taxBracket} />
        </ul>
        <Link linkHref="/" linkText="Check Another Income Level" />
      </div>
    );
  }
}

export default TaxBracket;
