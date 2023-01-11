import React, { useState } from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Form, Label, Ul, Li } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import Checkbox from "/src/components/ui/checkbox/checkbox";
import {
  StyledTitle,
  FilterSectionWrapper,
  CheckboxForMeat,
  Price
} from "./styled";

function Filter({ buyOptions }) {
  const { filterOptions } = buyOptions;
  const [meatType, setMeatType] = useState(0);
  return (
    <>
      <Form $width={353}>
        <FilterSectionWrapper marginBottom={18}>
          <Label>Выберите продукты</Label>
          <Ul>
            {filterOptions.map((option) => (
              <Li key={option}>
                <Checkbox
                  labelComponent={CheckboxForMeat}
                  selectValue={option.title}
                  name={option.name}
                  value={option.title}
                  text={option.title}
                  onChange={(el) => {
                    setMeatType(Number(el.target.value));
                  }}
                />
              </Li>
            ))}
          </Ul>
        </FilterSectionWrapper>
        <FilterSectionWrapper>
          <Label>Сделать заказ</Label>
          <Label $small $marginBottom={8}>
            Цена
          </Label>
          <Price>1 200 руб.</Price>
          <Button minWidth={314}>Купить</Button>
        </FilterSectionWrapper>
      </Form>
    </>
  );
}

export default Filter;
