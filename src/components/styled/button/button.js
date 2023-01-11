import styled from "styled-components";

export const Button = styled.button`
  display: block;
  font-family: ${(props) => props.theme.fontFamily};
  padding: 0 24px;
  background-color: none;
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
`;

export default Button;
