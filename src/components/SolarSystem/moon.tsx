import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useCallback } from 'react';
import { Clock } from 'three';


const Moon = React.memo(() => {

  const moonRef = useRef<THREE.Mesh>(null);
  const clock = useRef<Clock>(new Clock());

  const [moonTexture] = useTexture([
    'public/images/moon-texture.jpg',
  ]);

  const updateMoonPosition = useCallback(() => {
    if (moonRef.current) {
      //orbit roration
      moonRef.current.position.x = Math.sin(clock.current.getElapsedTime() * 0.9) * 2;
      moonRef.current.position.z = Math.cos(clock.current.getElapsedTime() * 0.9) * 2;
      //axis rotation
      
      moonRef.current.rotation.y += 0.002;}
  }, [])

  useFrame(() => {
    updateMoonPosition()
  });

  return (
    <mesh castShadow receiveShadow ref={moonRef} position={[4,0,0]}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshPhongMaterial
        map={moonTexture}
        emissiveMap={moonTexture}
        emissive={0xffffff}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}
)

export default Moon;
