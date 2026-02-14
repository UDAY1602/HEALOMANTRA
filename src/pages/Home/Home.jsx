import React from "react";
import "./home.css";

import HomeHero from "./HomeHero";
import Homebenefits from "./Homebenefits";
import Homewelcome from "./Homewelcome";
import Homeservies from "./Homeservies";
import Homewhy from "./Homewhy";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Homewelcome />
      <Homebenefits />
      <Homeservies />
      <Homewhy />
    </>
  );
};

export default Home;
