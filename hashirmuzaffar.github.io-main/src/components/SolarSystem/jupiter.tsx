import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Clock } from 'three';

const Jupiter = React.memo(() => {
  const JupiterRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);

  const [JupiterTexture] = useTexture(['/images/jupiter-skin.jpg']);

  const updateJupiterPosition = useCallback(() => {
    if (JupiterRef.current) {
      const angle = clock.current.getElapsedTime() * 0.07894;
      const distance = 28;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      JupiterRef.current.position.set(x, 0, z);
      JupiterRef.current.rotation.y += 0.08;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    updateJupiterPosition();
  });

  return (
    <mesh
      ref={JupiterRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshPhongMaterial
        map={JupiterTexture}
        emissiveMap={JupiterTexture}
        emissive={0xffffff}
        emissiveIntensity={hovered ? 0.5 : 0.05}
      />
    </mesh>
  );
});

export default Jupiter;