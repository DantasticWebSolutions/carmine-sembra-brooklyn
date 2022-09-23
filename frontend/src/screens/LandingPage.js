import React from "react";
import About from "../components/LandingPage/About";
import ShopPreview from "../components/LandingPage/ShopPreview";
// import SwiperLandingPage from "../components/LandingPage/SwiperLandingPage";
import LinkToShop from "../components/LandingPage/LinkToShop";
import FotoEventi from "../components/LandingPage/FotoEventi";
// import Logo from "../components/LandingPage/Logo";
import TextVideoBackground from "../components/LandingPage/TextVideoBackground";
// import InstagramFeed from "../components/InstaFeed.js/InstagramFeed";

const LandingPage = () => {
  return (
    <div>
      {/* <SwiperLandingPage /> */}
      <TextVideoBackground />
      {/* <Logo /> */}
      <About />
      <ShopPreview />
      <LinkToShop />
      <FotoEventi />
      {/* <Social /> */}
      {/* <InstagramFeed
        token="IGQVJVU3U4ZAjljbGJEVkVVdnZAJOVBsYmlDdzZAlbWw5clk2TDJKRnBIRG5jQlFYanVLTThFV042MWpwdHFNTDBfUnR0OERQZAGZANZA2IwcG9uQjJKMmFSOGxaMk1qZAmxEUzdEb3FKNEYyX3hhYXZAQMlJuRgZDZD"
        counter="6"
      /> */}
    </div>
  );
};

export default LandingPage;

// https://api.instagram.com/oauth/authorize?client_id=602605711313535&redirect_uri=https://carmine-sembra-brooklyn.herokuapp.com/shop&scope=@dan_perignon&response_type=code
