import React from "react";
import About from "/src/components/blocks/about/about";
import FeautersList from "/src/components/blocks/feauters-list/feauters-list";

function MainPage({ feauters }) {
  return (
    <>
      <About />
      <FeautersList feauters={feauters} />
    </>
  );
}

export default MainPage;
