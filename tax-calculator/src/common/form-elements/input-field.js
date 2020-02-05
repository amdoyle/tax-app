import * as React from "react";

const IncomeInput = ({ labelText, inputValue, eventHandler, error }) => {
  return (
    <div>
      <label>
        {labelText}
        <span className="errors">{error}</span>
        <input
          id="gross-income"
          type="text"
          name="gi"
          value={inputValue}
          pattern="^[0-9]*$"
          onChange={eventHandler}
          required
        />
      </label>
    </div>
  );
};

const SubmitButton = ({ buttonText, eventHandler }) => {
  return <input type="submit" value={buttonText} disabled />;
};

export { IncomeInput, SubmitButton };
