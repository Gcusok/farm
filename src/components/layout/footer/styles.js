import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  min-height: 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span``;
