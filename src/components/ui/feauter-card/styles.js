import styled from "styled-components";
import { Section, P, Img } from "/src/components/styled";

export const StyledSection = styled(Section)`
  flex-direction: column;
  padding: 20px;
  min-height: 197px;
  background-color: ${(props) =>
    props.isFarm
      ? props.theme.colorLightGreenBackground
      : props.theme.colorLightRedBackground};
`;

export const CardHeader = styled(Section)`
  display: grid;
  padding: 0;
  grid-template-columns: 52px auto;
  gap: 4px 20px;
  margin-bottom: 20px;
`;

export const CardOrigin = styled.span`
  max-width: 178px;
  padding: 2px 10px;
  font-size: 14px;
  color: #ffffff;
  line-height: 21px;
  background-color: ${(props) =>
    props.isFarm
      ? props.theme.colorGreenBackground
      : props.theme.colorRedBackground};
`;

export const Image = styled(Img)`
  grid-row: 1/3;
`;

export const Text = styled(P)`
  text-align: left;
`;
