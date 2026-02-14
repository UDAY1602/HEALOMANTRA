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
      <Homebenefits />
      <Homewelcome />
      
      <Homeservices />
      <Homewhy />
    </>
  );
};

export default Home;
