import { PlaneProps, usePlane } from "@react-three/cannon";
import { Mesh } from "three";

export default function Plane(props: PlaneProps) {
  const [ref] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#171720" />
    </mesh>
  );
}
