import React from "react";
import Panel from "/src/components/ui/panel/panel";
import { TitleSize } from "/src/components/ui/title/title";
import OptionsList from "/src/components/ui/options-list/options-list";
import Tabs from "/src/components/ui/tabs/tabs";
import {
  ContentCardWrapper,
  ProductImage,
  ProductTitle,
  Price,
  ContentWrapper
} from "./styles";

function ProductCard({ product }) {
  const tabsList = [
    {
      title: "Описание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];

  return (
    <Panel>
      <ContentCardWrapper>
        <ProductImage src={product.image} />
        <ContentWrapper>
          <ProductTitle TitleSize={TitleSize.SMALL} Level={3}>
            {product.name}
          </ProductTitle>
          <Tabs maxContentHeight="105px" tabsList={tabsList} />
          <Price>
            {product.price} руб./ {product.weight} гр.{" "}
          </Price>
        </ContentWrapper>
      </ContentCardWrapper>
    </Panel>
  );
}

export default ProductCard;
