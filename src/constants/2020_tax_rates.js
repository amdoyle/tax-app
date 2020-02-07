export const TAX_BRACKET_ONE = amount => {
  const numAmount = parseInt(amount);
  const bracketAmount = numAmount > 48535 ? 48535 : numAmount;
  console.log(bracketAmount);
  return {
    amount: bracketAmount,
    min: 0,
    max: 48535,
    taxRate: "15%",
    taxAmount: bracketAmount * 0.15
  };
};

export const TAX_BRACKET_TWO = amount => {
  const numAmount = parseInt(amount);
  const bracketAmount = numAmount > 97069 ? 48535 : numAmount - 48535;

  return {
    amount: bracketAmount,
    min: 48535,
    max: 97069,
    taxRate: "20.5%",
    taxAmount: bracketAmount * 0.205
  };
};

export const TAX_BRACKET_THREE = amount => {
  const numAmount = parseInt(amount);
  const bracketAmount = numAmount > 150473 ? 53404 : numAmount - 48535 - 48535;

  return {
    amount: bracketAmount,
    min: 97069,
    max: 150473,
    taxRate: "26%",
    taxAmount: bracketAmount * 0.26
  };
};

export const TAX_BRACKET_FOUR = amount => {
  const numAmount = parseInt(amount);
  const bracketAmount =
    numAmount > 214368 ? 63895 : numAmount - 48535 - 48535 - 53404;

  return {
    amount: bracketAmount,
    min: 150473,
    max: 214368,
    taxRate: "29%",
    taxAmount: bracketAmount * 0.26
  };
};

export const TAX_BRACKET_FIVE = amount => {
  const numAmount = parseInt(amount);
  const bracketAmount = numAmount - 214369;

  return {
    amount: bracketAmount,
    min: 214369,
    max: null,
    taxRate: "33%",
    taxAmount: bracketAmount * 0.33
  };
};

export const TAX_BRACKETS = [
  TAX_BRACKET_ONE,
  TAX_BRACKET_TWO,
  TAX_BRACKET_THREE,
  TAX_BRACKET_FOUR,
  TAX_BRACKET_FIVE
];
