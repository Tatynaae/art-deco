import React from "react";
import Catalog from "../Catalog";
import Cooperation from "./Cooperation";
import Cta from "./Cta";
import FirstScreen from "./FirstScreen";
import Partners from "./Partners";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";
import Services from "./Services";
import Video from "./Video";
import House from "./House";

const Home = () => {
  return (
    <>
      <FirstScreen />
      <Services />
      <Video />
      <House />
      <Cooperation />
      {/* <Catalog home />  */}
      <Portfolio />
      <Reviews />
      <Partners />
      <Cta />
    </>
  );
};

export default Home;
