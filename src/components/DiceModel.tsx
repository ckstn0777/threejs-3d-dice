import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { DiceGLTF } from "@/types/DiceGLTF";
import { useBox, useCylinder } from "@react-three/cannon";
import { Group, Mesh } from "three";

export default function DiceModel() {
  const { nodes, materials } = useGLTF("/dice.glb") as DiceGLTF;

  const [ref, api] = useBox(
    () => ({
      args: [2, 2, 2],
      mass: 10,
      position: [0, 1, 0],
      linearFactor: [1, 1.5, 1],
      linearDamping: 0.9,
      // quaternion: [0, 0, 0, 0],
    }),
    useRef<Group>(null)
  );

  const [isDragging, setIsDragging] = React.useState(false);

  // useEffect(() => {
  //   if (!isDragging) {
  //     const force = 1 + 2 * Math.random();
  //     api.applyImpulse([-force, force, 0], [0, 0, 0.2]);

  //   }
  // }, [api, api.angularFactor, isDragging]);

  return (
    <group
      ref={ref}
      dispose={null}
      onPointerDown={() => setIsDragging(true)}
      onPointerMove={(e) => {
        if (isDragging) {
          // console.log(e);

          const intersection = e.intersections[0];
          const { point } = intersection;

          //api.position.set(0, point.y, 0);
          api.position.set(0, point.y <= 1 ? 1 : point.y, 0);
          // api.angularFactor.set(10, 10, 10);
          //ref.current?.position.set(point.x, point.y, point.z);
          //console.log("dragging", ref.current?.position);

          //ref.current?.position.set(0, 0, 0);
        }
      }}
      onPointerUp={() => {
        setIsDragging(false);
        const force = 1 + 2 * Math.random();
        api.applyImpulse([-force, force, 0], [0, 0, 0.2]);
      }}
      onPointerLeave={() => setIsDragging(false)}
    >
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
