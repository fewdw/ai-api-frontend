import React from "react";
import Stats from "./components/LandingPage/Stats";
import Video from "./components/LandingPage/Video";
import Pricing from "./components/LandingPage/Pricing";
import Reviews from "./components/Reviews";
import CodeComponent from "./components/cards/CodeComponent";

const Page = () => {
  return (
    <div>
      <Video />
      <Stats />
      <Reviews />
    </div>
  );
};

export default Page;
