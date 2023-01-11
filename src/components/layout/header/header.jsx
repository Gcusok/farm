import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Navigation from "/src/components/layout/navigation/navigation";
import { StyledSection } from "./styles";

function Header({ pageUrl }) {
  return (
    <StyledSection as="header">
      <Logo />
      <Navigation pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;
