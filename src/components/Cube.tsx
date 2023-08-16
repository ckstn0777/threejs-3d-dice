import { useBox } from "@react-three/cannon";

export default function Cube({
  position,
}: {
  position: [x: number, y: number, z: number];
}) {
  const [mesh, api] = useBox(() => ({
    mass: 10,
    rotation: [0.4, 0.2, 0.5],
    type: "Dynamic",
    position: position,
  }));

  return (
    <>
      {/*@ts-ignore*/}
      <mesh ref={mesh}>
        <boxGeometry />
        <meshLambertMaterial color="hotpink" />
      </mesh>
    </>
  );
}
