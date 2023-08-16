import * as THREE from "three";
import { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";

export default function PointLight() {
  const light = useRef(null!);
  // useHelper(light, THREE.DirectionalLightHelper, 0.5, "hotpink");

  return (
    <directionalLight
      ref={light}
      position={[2, 2, 2]}
      color="ffffff"
      intensity={1}
    />
  );
}
