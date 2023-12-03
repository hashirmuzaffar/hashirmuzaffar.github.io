import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Clock } from 'three';

const Saturn = React.memo(() => {
  const SaturnRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);

  const [SaturnTexture] = useTexture(['/images/saturn-skin.jpg']);

  const updateSaturnPosition = useCallback(() => {
    if (SaturnRef.current) {
      const angle = clock.current.getElapsedTime() * 0.0433601;
      const distance = 40;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      SaturnRef.current.position.set(x, 0, z);
      SaturnRef.current.rotation.y += 0.08;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    updateSaturnPosition();
  });

  return (
    <mesh
      ref={SaturnRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.7, 32, 32]} />
      <meshPhongMaterial
        map={SaturnTexture}
        emissiveMap={SaturnTexture}
        emissive={0xffffff}
        emissiveIntensity={hovered ? 0.5 : 0.05}
      />
    </mesh>
  );
});

export default Saturn;