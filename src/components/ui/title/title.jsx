import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRASMALL: "extra-small",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  h6: "6"
};

function Title({ level = 1, size, children, className, marginBottom }) {
  return (
    <StyledTitle
      as={`h${level}`}
      $size={size}
      className={className}
      marginBottom={marginBottom}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;
