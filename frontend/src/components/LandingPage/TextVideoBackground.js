import React, { Suspense } from "react";
import background from "../../asset/background.mp4";
import { Canvas } from "@react-three/fiber";
import Break from "../Break";

// import { OrbitControls } from "@react-three/drei";

const TextVideoBackground = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="video-container">
        <video
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
          // autoPlay="autoplay"
          // loop
          // muted
        >
          {" "}
          <source src={background} type="video/mp4" />
        </video>
        <div className="text-box">
          <span className="noselect">CARMINE SEMBRA BROOKLYN</span>
        </div>
      </div>
      <Canvas
        flat
        linear
        style={{
          marginTop: "25vh",
          position: "absolute",
          top: "10px",
        }}
        camera={{ position: [25, 55, 100], fov: 3 }}
      >
        {/* <OrbitControls /> */}
        <ambientLight intensity={1} />
        <directionalLight intensity={1} />
        <Suspense fallback={null}>
          <Break />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TextVideoBackground;
