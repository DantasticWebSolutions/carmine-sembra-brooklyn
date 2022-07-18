import React, { useEffect } from "react";
import About from "../components/LandingPage/About";
import ShopPreview from "../components/LandingPage/ShopPreview";
import SwiperLandingPage from "../components/LandingPage/SwiperLandingPage";
import LinkToShop from "../components/LandingPage/LinkToShop";
import FotoEventi from "../components/LandingPage/FotoEventi";
import Social from "../components/LandingPage/Social";
import Logo from "../components/LandingPage/Logo";

const LandingPage = () => {
  return (
    <div>
      {/* <SwiperLandingPage /> */}
      <Logo />
      <About />
      <ShopPreview />
      <LinkToShop />
      <FotoEventi />
      <Social />
    </div>
  );
};

export default LandingPage;
