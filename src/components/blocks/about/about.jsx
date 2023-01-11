import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, AboutWrapper, Text } from "./styles";

function About() {
  return (
    <>
      <StyledSection>
        <AboutWrapper>
          <Title size={TitleSize.BIG}>
            Магазин фермерских продуктов с доставкой
          </Title>
          <Text>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </Text>
        </AboutWrapper>
      </StyledSection>
    </>
  );
}

export default About;
