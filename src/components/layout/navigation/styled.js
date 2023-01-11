import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  display: inline-block;
  background-color: transparent;
  width: auto;
  height: auto;
  padding: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => props.theme.colorBlackForText};
  text-align: center;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
