"use client";
import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const LogoModel = React.memo(function LogoModel(props) {
  // Memuat gambar logo sebagai texture
  const texture = useLoader(TextureLoader, "/models/logo2.png"); // Path ke logo Anda
  const modelRef = useRef();

  // Animasi rotasi seperti roda
  useFrame(() => {
    modelRef.current.rotation.z += 0.02; // Rotasi di sumbu Z
  });

  return (
    <mesh
      {...props}
      ref={modelRef}
      scale={[1.8, 1.8, 1.8]} // Ukuran bidang
      position={[0, 1, 0]} // Posisi bidang
      rotation={[0, 0, 0]} // Rotasi awal
    >
      {/* PlaneGeometry untuk bidang 2D */}
      <planeGeometry args={[1, 1]} /> {/* Ukuran bidang 2x2 */}
      <meshBasicMaterial map={texture} transparent /> {/* Texture logo */}
    </mesh>
  );
});

export default LogoModel;
