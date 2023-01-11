import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: ${(props) => props.theme.colorBlackForText};
  margin-left: 14px;
`;
