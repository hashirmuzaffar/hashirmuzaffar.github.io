import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Clock } from 'three';

const Neptune = React.memo(() => {
  const NeptuneRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);

  const [NeptuneTexture] = useTexture(['/images/neptune-skin.jpg']);

  const updateNeptunePosition = useCallback(() => {
    if (NeptuneRef.current) {
      const angle = clock.current.getElapsedTime() * 0.01501;
      const distance = 53;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      NeptuneRef.current.position.set(x, 0, z);
      NeptuneRef.current.rotation.y += 0.08;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    updateNeptunePosition();
  });

  return (
    <mesh
      ref={NeptuneRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhongMaterial
        map={NeptuneTexture}
        emissiveMap={NeptuneTexture}
        emissive={0xffffff}
        emissiveIntensity={hovered ? 3 : 0.5}
      />
    </mesh>
  );
});

export default Neptune;