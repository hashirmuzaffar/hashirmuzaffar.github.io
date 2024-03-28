import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Clock } from 'three';

const Mars = React.memo(() => {
  const marsRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);

  const [marsTexture] = useTexture(['/images/mars-skin.jpg']);

  const updateMarsPosition = useCallback(() => {
    if (marsRef.current) {
      const angle = clock.current.getElapsedTime() * 0.0967301;
      const distance = 22;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      marsRef.current.position.set(x, 0, z);
      marsRef.current.rotation.y += 0.02;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    updateMarsPosition();
  });

  return (
    <mesh
      ref={marsRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.6, 32, 32]} />
      <meshPhongMaterial
        map={marsTexture}
        emissiveMap={marsTexture}
        emissive={0xffffff}
        emissiveIntensity={hovered ? 1 : 0.1}
      />
    </mesh>
  );
});

export default Mars;

