'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sphere,
  Torus,
  TorusKnot,
  Stars,
  GradientTexture,
  MeshWobbleMaterial,
} from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

function FloatingOrb({
  position,
  scale,
  color,
  speed,
  delay,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime() + delay;
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.3;
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.z = t * 0.15;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </mesh>
  );
}

function CentralObject({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, mouse }) => {
    if (!meshRef.current || !groupRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;
    groupRef.current.rotation.y += (mouse.x * 0.3 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-mouse.y * 0.15 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <TorusKnot args={[1.2, 0.38, 256, 32, 2, 3]}>
          <MeshDistortMaterial
            color={isDark ? '#00d4ff' : '#0066ff'}
            distort={0.25}
            speed={1.5}
            roughness={0.05}
            metalness={0.9}
            envMapIntensity={1.5}
          />
        </TorusKnot>
      </mesh>

      {/* Orbiting ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <Torus args={[2.2, 0.015, 16, 200]}>
          <meshBasicMaterial color={isDark ? '#00d4ff' : '#0080ff'} transparent opacity={0.4} />
        </Torus>
      </mesh>
      <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
        <Torus args={[2.6, 0.01, 16, 200]}>
          <meshBasicMaterial color={isDark ? '#9d5cff' : '#7c3aed'} transparent opacity={0.25} />
        </Torus>
      </mesh>

      {/* Floating satellites */}
      <FloatingOrb position={[-3, 1, -1]} scale={0.25} color={isDark ? '#00d4ff' : '#0066ff'} speed={1.2} delay={0} />
      <FloatingOrb position={[3, -1, 0.5]} scale={0.18} color={isDark ? '#9d5cff' : '#7c3aed'} speed={0.9} delay={1} />
      <FloatingOrb position={[1.5, 2.5, -2]} scale={0.12} color={isDark ? '#00d4ff' : '#00b6d7'} speed={1.5} delay={2} />
      <FloatingOrb position={[-2, -2.5, 1]} scale={0.2} color={isDark ? '#7c3aed' : '#9d5cff'} speed={0.7} delay={0.5} />
    </group>
  );
}

function ParticleField({ isDark }: { isDark: boolean }) {
  const count = 600;
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      speeds[i] = Math.random() * 0.5 + 0.5;
    }
    return { positions, speeds };
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = t * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={isDark ? '#00d4ff' : '#0066ff'}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function CameraController() {
  const { camera } = useThree();
  useFrame(({ mouse }) => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <CameraController />

        {/* Lighting */}
        <ambientLight intensity={isDark ? 0.2 : 0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={isDark ? 0.8 : 1.2}
          color={isDark ? '#00d4ff' : '#0066ff'}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color={isDark ? '#9d5cff' : '#7c3aed'} />
        <pointLight position={[0, 0, 5]} intensity={0.3} color={isDark ? '#ffffff' : '#e0f0ff'} />

        <CentralObject isDark={isDark} />
        <ParticleField isDark={isDark} />

        {isDark && <Stars radius={40} depth={30} count={800} factor={2} fade />}

        <Environment preset={isDark ? 'night' : 'city'} />
      </Canvas>
    </div>
  );
}
