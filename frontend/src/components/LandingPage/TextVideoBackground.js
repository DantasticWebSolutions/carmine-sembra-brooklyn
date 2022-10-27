import React from "react";

import background from "../../asset/background.mp4";
import Poster from "../../asset/video-poster.jpg";

const TextVideoBackground = () => {
  return (
    <div style={{ width: "100vw" }}>
      <div className="video-container">
        <video
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          poster={Poster}
        >
          {" "}
          <source src={background} type="video/mp4" />
        </video>
        <div className="text-box">
          <span className="noselect carmine">CARMINE</span>
          <span className="noselect sembra">SEMBRA</span>
          <span className="noselect brooklyn">BROOKLYN</span>
        </div>
      </div>
    </div>
  );
};

export default TextVideoBackground;
