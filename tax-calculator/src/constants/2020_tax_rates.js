export const TAX_BRACKET_ONE = amount => ({
  amount: amount,
  min: 0,
  max: 48535,
  taxRate: "15%",
  taxAmount: amount > 48535 ? 48535 * 0.15 : amount * 0.15
});

export const TAX_BRACKET_TWO = amount => ({
  amount: amount,
  min: 48535,
  max: 97069,
  taxRate: "20.5%",
  taxAmount: amount > 48535 + 48535 ? 48535 * 0.205 : (amount - 48535) * 0.205
});

export const TAX_BRACKET_THREE = amount => ({
  amount: amount,
  min: 97069,
  max: 150473,
  taxRate: "26%",
  taxAmount:
    amount > 48535 + 48535 + 53404
      ? 53404 * 0.26
      : (amount - 48535 - 48535) * 0.26
});

export const TAX_BRACKET_FOUR = amount => ({
  amount: amount,
  min: 150473,
  max: 214368,
  taxRate: "29%",
  taxAmount:
    amount > 48535 + 48535 + 53404 + 63895
      ? 63895 * 0.26
      : (amount - 48535 - 48535 - 53404) * 0.29
});

export const TAX_BRACKET_FIVE = amount => ({
  amount: amount,
  min: 214369,
  max: null,
  taxRate: "33%",
  taxAmount: (amount - 48535 - 48535 - 53404 - 63895) * 0.33
});

export const TAX_BRACKETS = [
  TAX_BRACKET_ONE,
  TAX_BRACKET_TWO,
  TAX_BRACKET_THREE,
  TAX_BRACKET_FOUR,
  TAX_BRACKET_FIVE
];
