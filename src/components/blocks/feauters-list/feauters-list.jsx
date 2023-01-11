import React from "react";
import Title, { TitleLevel, TitleSize } from "/src/components/ui/title/title";
import FeauterCard from "/src/components/ui/feauter-card/feauter-card";
import Button from "/src/components/ui/button/button";
import { StyledSection, FeautersListList, FeautersItem } from "./styles";

function FeautersList({ feauters }) {
  return (
    <section className="feauters-list">
      {feauters?.length ? (
        <StyledSection>
          <Title level={TitleLevel.H2} size={TitleSize.SMALL}>
            Почему фермерские продукты лучше?
          </Title>
          <FeautersListList>
            {feauters.map((feauter) => (
              <FeautersItem key={feauter.id} isFarm={feauter.isFarm}>
                <FeauterCard {...feauter} />
              </FeautersItem>
            ))}
          </FeautersListList>
          <Button minWidth="260" link="/buy">
            Купить
          </Button>
        </StyledSection>
      ) : null}
    </section>
  );
}

export default FeautersList;
