import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { DiceGLTF } from "@/types/DiceGLTF";
import { useBox, useCylinder } from "@react-three/cannon";
import { Group, Mesh } from "three";

export default function DiceModel() {
  const { nodes, materials } = useGLTF("/dice.glb") as DiceGLTF;

  const [ref] = useBox(
    () => ({
      args: [2, 2, 2],
      mass: 1,
      position: [0, 1, 0],
    }),
    useRef<Group>(null)
  );

  return (
    <group ref={ref} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials["black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.white}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/dice.glb");
