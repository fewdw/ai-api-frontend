import React from "react";
import Stats from "./components/LandingPage/Stats";
import Video from "./components/LandingPage/Video";
import Reviews from "./components/Reviews";

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
