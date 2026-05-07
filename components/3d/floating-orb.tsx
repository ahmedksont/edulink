"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }

    if (lightRef.current) {
      lightRef.current.position.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 2.5;
      lightRef.current.position.z =
        Math.cos(state.clock.elapsedTime * 0.5) * 2.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group>
        {/* 💡 Softer + brighter violet light */}
        <pointLight
          ref={lightRef}
          intensity={2.2}
          color="#8b5cf6"
          distance={10}
        />

        {/* 🟣 Orb (lighter violet for light UI) */}
        <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#7c3aed"
            distort={0.35}
            speed={2}
            roughness={0.25}
            metalness={0.5}
          />
        </Sphere>

        {/* ✨ Particles (more visible on white bg) */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particles.length / 3}
              array={particles}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.025}
            color="#c4b5fd"
            transparent
            opacity={0.7}
            sizeAttenuation
          />
        </points>
      </group>
    </Float>
  );
}

export function FloatingOrbScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* 🌞 LIGHT MODE LIGHTING */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Orb />
      </Canvas>
    </div>
  );
}