import * as taxRates from "../constants/2020_tax_rates";

class IncomeTax {
  grossIncome = 0;

  constructor(grossIncome) {
    this.grossIncome = grossIncome;
  }

  roundDecimal(number) {
    return number.toFixed(2);
  }

  getTaxBracket() {
    const taxBracket = taxRates.TAX_BRACKETS.filter(
      bracket => this.grossIncome >= bracket(this.grossIncome).min
    );

    const taxBrackets = taxBracket.map(bracket => bracket(this.grossIncome));

    const taxesOwed = this.roundDecimal(
      taxBrackets.reduce(this.calculateTaxOwed, 0)
    );

    return { taxesOwed, taxBracket: taxBrackets };
  }

  calculateTaxOwed = (taxesOwed, getTaxBracketAmount) =>
    taxesOwed + getTaxBracketAmount.taxAmount;
}

export default IncomeTax;
