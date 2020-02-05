import * as taxRates from "../constants/2020_tax_rates";

class IncomeTax {
  grossIncome = 0;

  constructor(grossIncome) {
    this.grossIncome = grossIncome;
  }

  getTaxBracket() {
    const taxBracket = taxRates.TAX_BRACKETS.filter(
      bracket => this.grossIncome >= bracket(0).cieling
    );

    const taxesOwed = taxBracket.reduce(this.calculateTaxOwed, 0);

    return { taxesOwed, taxBracket };
  }

  calculateTaxOwed = (taxesOwed, getTaxBracketAmount) =>
    taxesOwed + getTaxBracketAmount(this.grossIncome).taxAmount;
}

export default IncomeTax;
