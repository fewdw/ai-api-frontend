import React from "react";
import MainTitle from "./MainTitle";
import SectionGrid from "./SectionGrid";

const NewHero = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12 px-6">
      <MainTitle />
      <SectionGrid />
    </div>
  );
};

export default NewHero;
