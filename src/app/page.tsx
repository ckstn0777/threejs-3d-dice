"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import PointerLight from "@/components/PointLight";
import { Physics } from "@react-three/cannon";
import Plane from "@/components/Plane";
import DiceModel from "@/components/DiceModel";

export default function Home() {
  return (
    <main className="">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          camera={{
            position: [10, 10, 10],
          }}
        >
          <ambientLight />
          {/* <Box position={[0, 0, 0]} /> */}
          <PointerLight />

          <Physics>
            <Plane position={[0, 0, 0]} />
            <DiceModel />
          </Physics>

          <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} />

          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </main>
  );
}
