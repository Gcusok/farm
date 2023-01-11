import styled from "styled-components";
import { Img } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const ContentCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 248px 2fr;
  gap: 0 20px;
`;

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 419px;
  min-height: 248px;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  margin-top: auto;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colorBlueBackground};
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`;
