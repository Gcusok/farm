import styled from "styled-components";
import { Section, Ul } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export const FeautersListList = styled(Ul)`
  list-style: none;
  padding: 0;
  margin: 64px 0 64px 0;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
`;

export const FeautersItem = styled.li`
  grid-column: ${(props) =>
    props.isFarm ? "" : props.theme.feautersItemAligenRight};
`;
