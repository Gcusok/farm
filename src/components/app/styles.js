import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
  }

  body {
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    font-weight: 400;
    line-height: 27px;
    color: ${(props) => props.theme.colorBlackForText};
  }

  html {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
} 
`;
