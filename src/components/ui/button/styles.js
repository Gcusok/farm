import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  border: none;
  background-color: ${(props) => props.theme.colorForButton};
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 350px;
  font-weight: 700;
  line-height: 27px;
  height: 60px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  color: ${(props) => props.theme.colorWhite};
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  text-align: center;
  padding: 16px 0;

  &:hover,
  &:active {
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    background-color: ${(props) => props.theme.colorForButttonHover};
  }

  &:active {
    box-shadow: none;
  }
`;
