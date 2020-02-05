import * as React from "react";
import { IncomeInput, SubmitButton } from "../common/form-elements/input-field";

class IncomeTaxFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: ""
    };
    this.checkIncomeField = this.checkIncomeField.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  numberNumberField(value, regex) {
    return value === "" || !regex.test(value);
  }

  checkIncomeField(event) {
    const element = event.target;
    const inputPattern = new RegExp(element.pattern);
    const inputValue = element.value;
    const form = event.target.parentElement.parentElement.parentElement;
    this.setState({
      value: inputValue
    });

    if (this.numberNumberField(inputValue, inputPattern)) {
      this.setState({
        error: "Only numeric values are accepted."
      });
      form
        .querySelector("input[type=submit]")
        .setAttribute("disabled", "disabled");

      return false;
    }

    this.setState({
      value: inputValue,
      error: ""
    });
    form.querySelector("input[type=submit]").removeAttribute("disabled");
  }

  onFormSubmit(event) {
    const form = event.target;
    const formFields = form.querySelectorAll("input:not([type=submit])");
    const errors = [...formFields].filter(input => {
      return this.numberNumberField(input.value, new RegExp(input.pattern));
    });

    if (errors.length != 0) {
      event.preventDefault();
      this.setState({
        error: "Value must be a number. No letters or punctuation allowed"
      });

      return;
    }

    this.setState({
      error: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Enter Your 2019 Income Inforation </h2>
        <form onSubmit={this.onFormSubmit} method="get" action="/2019?">
          <IncomeInput
            labelText="Enter Your Gross Income:"
            inputValue={this.state.value}
            eventHandler={this.checkIncomeField}
            error={this.state.error}
          />
          <SubmitButton buttonText="Get 2019 Tax Info" />
        </form>
      </div>
    );
  }
}

export default IncomeTaxFrom;
