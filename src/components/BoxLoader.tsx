import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function BoxLoader() {
  const gltf = useLoader(GLTFLoader, "/dice.glb");
  console.log(gltf.scene);

  return <primitive object={gltf.scene} />;
}

// useGLTF.preload("/dice.glb");
