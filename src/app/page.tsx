"use client";

import * as THREE from "three";
import Box from "@/components/Box";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import BoxLoader from "@/components/BoxLoader";
import PointerLight from "@/components/PointLight";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          camera={{
            position: [0, 1, 10],
          }}
        >
          <ambientLight />
          {/* <Box position={[0, 0, 0]} /> */}
          <PointerLight />
          <BoxLoader />

          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />

          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}
