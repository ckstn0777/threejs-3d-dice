import { useEffect, useState } from "react";
import * as THREE from "three";

export default function useMouseHover() {
  const [mouse, setMouse] = useState(new THREE.Vector2());
  // console.log(mouse);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse(new THREE.Vector2(x, y));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
