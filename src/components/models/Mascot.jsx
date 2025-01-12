"use client";
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Mascot = () => {
  const texture = useLoader(TextureLoader, "/models/mascot.png"); // Ganti dengan path gambar Anda
  const planeRef = useRef();

  // Animasi naik-turun
  useFrame((state) => {
    planeRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <mesh ref={planeRef} position={[0, 0, 0]}>
      <planeGeometry args={[4, 4]} /> {/* Bidang 2x2 unit */}
      <meshBasicMaterial map={texture} transparent /> {/* Material dengan texture */}
    </mesh>
  );
};

export default Mascot;
