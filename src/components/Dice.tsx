import { useBox } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Dice() {
  const gltf = useLoader(GLTFLoader, "/dice.glb");

  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 0, 0],
    args: [2, 2, 2],
  }));

  return <primitive object={gltf.scene} />;
}

// useGLTF.preload("/dice.glb");
