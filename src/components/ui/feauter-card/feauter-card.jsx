import React from "react";
import Title, { TitleLevel } from "/src/components/ui/title/title";
import { StyledSection, CardHeader, CardOrigin, Image, Text } from "./styles";

function FeauterCard({ title, text, src, alt, isFarm, feauter }) {
  return (
    <StyledSection isFarm={isFarm}>
      <CardHeader as="header">
        <Image src={src} width="52" height="52" alt={alt} />
        <CardOrigin isFarm={isFarm}>{feauter}</CardOrigin>
        <Title level={TitleLevel.H3}>{title}</Title>
      </CardHeader>
      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </StyledSection>
  );
}

export default FeauterCard;
