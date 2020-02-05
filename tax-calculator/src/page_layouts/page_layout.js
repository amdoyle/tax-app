import * as React from "react";

export default class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grossIncome: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Income Tax Calculator</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
