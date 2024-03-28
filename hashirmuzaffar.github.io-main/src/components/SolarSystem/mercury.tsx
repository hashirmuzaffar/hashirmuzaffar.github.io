import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Clock } from 'three';

const Mercury = React.memo(() => {
  const MercuryRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);

  const [MercuryTexture] = useTexture(['/images/mercury-skin.jpg']);

  const updateMercuryPosition = useCallback(() => {
    if (MercuryRef.current) {
      const angle = clock.current.getElapsedTime() * 0.1501;
      const distance = 8;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      MercuryRef.current.position.set(x, 0, z);
      MercuryRef.current.rotation.y += 0.02;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    updateMercuryPosition();
  });

  return (
    <mesh
      ref={MercuryRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.0, 32, 32]} />
      <meshPhongMaterial
        map={MercuryTexture}
        emissiveMap={MercuryTexture}
        emissive={0xffffff}
        emissiveIntensity={hovered ? 2.0 : 0.9 }
      />
    </mesh>
  );
});

export default Mercury;