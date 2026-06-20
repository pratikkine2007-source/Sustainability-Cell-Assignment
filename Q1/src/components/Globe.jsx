import { Canvas, useLoader } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    "/earthmap.jpg"
  );

  return (
    <>
      {/* Earth */}
      <Sphere ref={earthRef} args={[4.2, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          roughness={0.9}
          metalness={0}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[4.28, 64, 64]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.18}
        />
      </Sphere>
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-[850px] h-[850px] relative z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 70 }}>
        {/* Lights */}
        <ambientLight intensity={1.8} />

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

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
          enableDamping
          dampingFactor={0.08}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.6}
        />
      </Canvas>
    </div>
  );
}