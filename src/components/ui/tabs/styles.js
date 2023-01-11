import styled, { css } from "styled-components";
import { Button, Ul, Li } from "/src/components/styled";

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;

  ${(props) =>
    props.$isSelect
      ? css`
          background-color: ${(props) => props.theme.tabBackgroundChecked};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${(props) => props.theme.colorWhite};
        `
      : css`
          background-color: ${(props) => props.theme.colorGrayBackground};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${(props) => props.theme.colorBlackForText};
        `}
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeiht || "none"};
  overflow-y: overlay;
`;
