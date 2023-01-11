import styled from "styled-components";
import { Section, P } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";

export const StyledSection = styled(Section)`
  position: relative;
  z-index: 2;
  padding: 183px 0 183px 90px;
  background-color: #d8ecfe;
  overflow: hidden;

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    width: 446px;
    height: 563px;
    background-image: url(${aboutImage});
  }
`;

export const AboutWrapper = styled.div`
  z-index: 3;
  max-width: 636px;
`;

export const Text = styled(P)`
  margin-top: 24px;
  padding-right: 100px;
`;
