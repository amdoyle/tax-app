import * as React from "react";
import tachyons from "styled-components-tachyons";
import styled from "styled-components";

const HREF = styled.a`
  font-size: 1rem;
  text-align: center;
  color: var(--blue);
  ${tachyons}

  &:hover {
    color: var(--black);
  }
`;

const Link = ({ linkText, linkHref }) => {
  return (
    <HREF db pa1 href={linkHref}>
      {linkText}
    </HREF>
  );
};

export default Link;
