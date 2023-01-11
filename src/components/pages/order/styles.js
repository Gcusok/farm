import styled, { css } from "styled-components";
import { Section, Label } from "/src/components/styled";
import { TextInput } from "/src/components/styled";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";
import Price from "/src/components/ui/price/price";

const LeftWidth = "353px";

export const StyledOrder = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-top: 40px;
  padding-bottom: 0;
  max-width: ${(props) => props.theme.pageWidth};
  background-color: ${(props) => props.theme.colorGrayBackground};
`;

export const LeftColumn = styled.div`
  width: ${LeftWidth};
  max-height: 100%;
  overflow-y: overlay;
  padding-bottom: 40px;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabelm = styled(Label)`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 32px;
`;

// контейнер слайдера

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  height: 85vh;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    height: 22px;
    width: 22px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${(props) => props.theme.colorForButton};
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
          `}
  }
`;
