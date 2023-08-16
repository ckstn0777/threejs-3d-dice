"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useHelper } from "@react-three/drei";
import PointerLight from "@/components/PointLight";
import { Physics } from "@react-three/cannon";
import Plane from "@/components/Plane";
import DiceModel from "@/components/DiceModel";
import useMouseHover from "@/hooks/useMouseHover";
import Cube from "@/components/Cube";

export default function Home() {
  useMouseHover();

  return (
    <main className="">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          camera={{
            position: [0, 20, 20],
          }}
        >
          <ambientLight />
          {/* <Box position={[0, 0, 0]} /> */}
          <PointerLight />

          <Physics gravity={[0, -9.81, 0]}>
            <Plane position={[0, 0, 0]} />
            <Cube position={[10, 20, 0]} />
            <DiceModel />
          </Physics>

          {/* <gridHelper args={[10, 10]} />
          <axesHelper args={[8]} /> */}

          {/* <OrbitControls /> */}
        </Canvas>
      </div>
    </main>
  );
}
