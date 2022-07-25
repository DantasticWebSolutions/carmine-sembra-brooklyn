import React, { Suspense } from "react";
import background from "../../asset/background.mp4";
// import { Canvas } from "react-three-fiber";
// import Break from "../Break.js";

// import { OrbitControls } from "@react-three/drei";

const TextVideoBackground = () => {
  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
    <div className="video-container">
      <video autoPlay="autoplay" loop muted>
        {" "}
        <source src={background} type="video/mp4" />
      </video>
      <div className="text-box">
        <span>CARMINE SEMBRA BROOKLYN</span>
        {/* CARMINE SEMBRA BROOKLYN */}
      </div>
      {/* </div> */}
      {/* <Canvas
        flat
        linear
        style={{
          // widht: "100%",
          // height: "100vh",
          // background: "black",
          paddingTop: "20vh",
          paddingBottom: "-20vh",
          position: "absolute",
        }}
        camera={{ position: [25, 55, 100], fov: 3 }}
      >
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
          <Break />
        </Suspense>
      </Canvas> */}
    </div>
  );
};

export default TextVideoBackground;
