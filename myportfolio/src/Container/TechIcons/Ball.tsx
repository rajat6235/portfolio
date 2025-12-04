import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader.tsx";

interface BallProps {
  imgUrl: string;
}

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <ambientLight intensity={0.5} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <directionalLight position={[0, 0, 1.35]} />
      {/* eslint-disable-next-line react/no-unknown-property */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#dfe4ff'
          // eslint-disable-next-line react/no-unknown-property
          polygonOffset
          // eslint-disable-next-line react/no-unknown-property
          polygonOffsetFactor={-5}
          // eslint-disable-next-line react/no-unknown-property
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 0.05]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      style={{ width: '100px', height: '100px', cursor: "pointer" }}
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;