import * as React from "react";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

const LI = styled.li`
  font-size: 1rem;
`;

const Bracket = ({ bracketElements }) => {
  return <LI>{bracketElements.taxRate}</LI>;
};

const TaxBrackets = ({ brackets }) => {
  return brackets.map((bracket, index) => {
    return <Bracket bracketElements={bracket()} key={index} />;
  });
};

export default TaxBrackets;
