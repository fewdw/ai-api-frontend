import React from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Video from "./components/Video";
import Pricing from "./components/Pricing";

const page = () => {
  return (
    <div>
      <Header></Header>
      <Video></Video>
      <Stats></Stats>
      <Reviews></Reviews>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
};

export default page;
