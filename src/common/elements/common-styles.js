import * as React from "react";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1.5rem;
  color: var(--black);
`;

const SectionHeader = ({ title }) => <H2>{title}</H2>;

const Label = styled.p`
  font-size: 1rem;
  color: var(--black);
  ${tachyons}
`;

const Value = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: var(--black);
  ${tachyons}
`;

const SectionLabel = ({ title, value }) => (
  <Label mv0 pv1>
    {title}
    <Value pl1>{value}</Value>
  </Label>
);

export { SectionHeader, SectionLabel };
