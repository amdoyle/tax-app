import * as React from "react";

const Link = ({ linkText, linkHref }) => {
  return <a href={linkHref}>{linkText}</a>;
};

export default Link;
