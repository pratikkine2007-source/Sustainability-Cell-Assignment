import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Earth() {
  
  const earthRef = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    "/earthmap.jpg"
  );

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <>
      {/* Earth */}
      <Sphere ref={earthRef} args={[4.2, 64, 64]}>
        <meshStandardMaterial map={texture} />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[4.05, 64, 64]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.12}
        />
      </Sphere>
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-[850px] h-[850px] relative z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>

        <ambientLight intensity={2.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[0, 0, 8]}
          intensity={2}
          color="#60a5fa"
        />

        <Earth />

      </Canvas>
    </div>
  );
}