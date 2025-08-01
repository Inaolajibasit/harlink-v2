"use client";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";

function ShipModel({ hovered, mouse }: { hovered: boolean; mouse: { x: number; y: number } }) {
  const { scene } = useGLTF("/models/container_ship_less.glb");
  const shipRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!shipRef.current) return;

    if (!hovered) {
      shipRef.current.rotation.y += 0.003;
    } else {
      const targetX = mouse.y * 0.2;
      const targetY = -mouse.x * 1.6;

      shipRef.current.rotation.x += (targetX - shipRef.current.rotation.x) * 0.05;
      shipRef.current.rotation.y += (targetY - shipRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <primitive
      object={scene}
      ref={shipRef}
      scale={0.5}
      position={[0, -1, 0]}
    />
  );
}

export default function CargoShip() {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouse({
      x: e.clientX / window.innerWidth - 0.5,
      y: e.clientY / window.innerHeight - 0.5,
    });
  };

  return (
    <div
      className="w-[100%] h-[700px] overflow-auto absolute left-0 top-40 right-0 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handlePointerMove}
    >
      <Canvas camera={{ position: [0, 34, 60], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <ShipModel hovered={hovered} mouse={mouse} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
