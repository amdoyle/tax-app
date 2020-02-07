import * as React from "react";

const Bracket = ({ bracketElements }) => {
  return <li>{bracketElements.taxRate}</li>;
};

const TaxBrackets = ({ brackets }) => {
  return brackets.map((bracket, index) => {
    return <Bracket bracketElements={bracket()} key={index} />;
  });
};

export default TaxBrackets;
