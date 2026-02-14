import React from "react";


import HomeHero from "./HomeHero";
import Homebenefits from "./Homebenefits";
import Homewelcome from "./Homewelcome";
import Homeservices from "./Homeservices";
import Homewhy from "./Homewhy";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Homewelcome />
      <Homebenefits />
      <Homeservices />
      <Homewhy />
    </>
  );
};

export default Home;
