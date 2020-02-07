import * as React from "react";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 0 auto;
  ${tachyons}
`;

const H1 = styled.h1`
  font-size: 2rem;
  color: var(--grey);
  border-top: 5px solid var(--blue);
  ${tachyons}
`;

const ContentWrapper = styled.main`
  ${tachyons}
`;

export default class PageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grossIncome: 0
    };
  }

  render() {
    return (
      <PageWrapper flex flex_column>
        <H1 pa3 mv0>
          Income Tax Calculator
        </H1>
        <ContentWrapper self_center>{this.props.children}</ContentWrapper>
      </PageWrapper>
    );
  }
}
