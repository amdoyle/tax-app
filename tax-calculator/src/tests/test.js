const { assert } = require("chai");
const IncomeTax = require("../income_tax_rates/income_tax").default;
const {
  TAX_BRACKET_ONE,
  TAX_BRACKET_TWO,
  TAX_BRACKET_THREE,
  TAX_BRACKET_FOUR,
  TAX_BRACKET_FIVE
} = require("../constants/2020_tax_rates");

describe("IncomeTax", () => {
  const testCases = [
    {
      args: 1000,
      expected: { taxesOwed: "150.00", taxBracket: [TAX_BRACKET_ONE] }
    },
    {
      args: 10000,
      expected: { taxesOwed: "1500.00", taxBracket: [TAX_BRACKET_ONE] }
    },
    {
      args: 50000,
      expected: {
        taxesOwed: "7580.57",
        taxBracket: [TAX_BRACKET_ONE, TAX_BRACKET_TWO]
      }
    },
    {
      args: 98000,
      expected: {
        taxesOwed: "17471.72",
        taxBracket: [TAX_BRACKET_ONE, TAX_BRACKET_TWO, TAX_BRACKET_THREE]
      }
    },
    {
      args: 175000,
      expected: {
        taxesOwed: "38227.50",
        taxBracket: [
          TAX_BRACKET_ONE,
          TAX_BRACKET_TWO,
          TAX_BRACKET_THREE,
          TAX_BRACKET_FOUR
        ]
      }
    },
    {
      args: 215000,
      expected: {
        taxesOwed: "47935.90",
        taxBracket: [
          TAX_BRACKET_ONE,
          TAX_BRACKET_TWO,
          TAX_BRACKET_THREE,
          TAX_BRACKET_FOUR,
          TAX_BRACKET_FIVE
        ]
      }
    }
  ];

  testCases.forEach(test => {
    it(`getTaxBracket: income of ${test.args}`, () => {
      const taxes = new IncomeTax(test.args);
      const taxBracketInfo = taxes.getTaxBracket();
      assert.equal(taxBracketInfo.taxesOwed, test.expected.taxesOwed);
      assert.equal(
        taxBracketInfo.taxBracket.length,
        test.expected.taxBracket.length
      );
    });
  });
});
