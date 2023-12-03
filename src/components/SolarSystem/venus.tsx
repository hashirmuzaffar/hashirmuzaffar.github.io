import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Clock } from 'three';

const Venus = React.memo(() => {
  const VenusRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);

  const [VenusTexture] = useTexture(['/images/venus-map.jpg']);

  const updateVenusPosition = useCallback(() => {
    if (VenusRef.current) {
      const angle = clock.current.getElapsedTime() * 0.132321;
      const distance = 12;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      VenusRef.current.position.set(x, 0, z);
      VenusRef.current.rotation.y += 0.02;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    updateVenusPosition();
  });

  return (
    <mesh
      ref={VenusRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshPhongMaterial
        map={VenusTexture}
        emissiveMap={VenusTexture}
        emissive={0xffffff}
        emissiveIntensity={hovered ? 0.9 : 0.09}
      />
    </mesh>
  );
});

export default Venus;