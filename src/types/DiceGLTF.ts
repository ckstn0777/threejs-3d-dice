import type { GLTF } from "three-stdlib/loaders/GLTFLoader";
import type { Material, Mesh } from "three";

export interface DiceGLTF extends GLTF {
  materials: {
    "black": Material;
    white: Material;
  };
  nodes: {
    Cube_1: Mesh;
    Cube_2: Mesh;
  };
}
