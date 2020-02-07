import * as React from "react";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

const Label = styled.label`
  font-size: 1rem;
  color: var(--black);
  ${tachyons}
`;

const Input = styled.input`
  font-size: 1.5rem;
  ${tachyons}
`;

const Error = styled.span`
  min-height: 2rem;
  font-size: 0.8rem;
  color: var(--error-red);
  ${tachyons}
`;

const IncomeInput = ({ labelText, inputValue, eventHandler, error }) => {
  return (
    <div>
      <Label flex flex_column pb4>
        {labelText}
        <Error pv1 className="errors">
          {error}
        </Error>
        <Input
          pa1
          id="gross-income"
          type="text"
          name="gi"
          value={inputValue}
          pattern="^[0-9]*$"
          onChange={eventHandler}
          required
        />
      </Label>
    </div>
  );
};

const SubmitBtn = styled.input`
  font-size: 2rem;
  ${tachyons}
`;

const SubmitButton = ({ buttonText, eventHandler }) => {
  return <SubmitBtn pa3 h2 w_100 type="submit" value={buttonText} disabled />;
};

export { IncomeInput, SubmitButton };
