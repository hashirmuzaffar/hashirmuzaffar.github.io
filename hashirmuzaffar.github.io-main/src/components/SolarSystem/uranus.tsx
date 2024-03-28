import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Clock } from 'three';

const Uranus = React.memo(() => {
  const UranusRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);

  const [UranusTexture] = useTexture(['/images/uranus-skin.jpg']);

  const updateUranusPosition = useCallback(() => {
    if (UranusRef.current) {
      const angle = clock.current.getElapsedTime() * 0.0277501;
      const distance = 46;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      UranusRef.current.position.set(x, 0, z);
      UranusRef.current.rotation.y += 0.08;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  useFrame(() => {
    updateUranusPosition();
  });

  return (
    <mesh
      ref={UranusRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshPhongMaterial
        map={UranusTexture}
        emissiveMap={UranusTexture}
        emissive={0xffffff}
        emissiveIntensity={hovered ? 0.5 : 0.01}
      />
    </mesh>
  );
});

export default Uranus;