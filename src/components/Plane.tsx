import { PlaneProps, usePlane } from "@react-three/cannon";
import { Mesh } from "three";

export default function Plane(props: PlaneProps) {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    material: {
      friction: 0.1,
    },
    ...props,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#717174" />
    </mesh>
  );
}
