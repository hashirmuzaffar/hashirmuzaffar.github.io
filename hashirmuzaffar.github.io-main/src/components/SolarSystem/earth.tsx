import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useCallback, useState, useEffect } from 'react';
import Moon from './moon';
import { Clock } from 'three';
import * as THREE from 'three';

interface EarthProps {
  displacementScale: number;
}

const Earth: React.FC<EarthProps> = React.memo(({ displacementScale }) => {
  const earthRef = useRef<THREE.Object3D>(null);
  const earthRefTwo = useRef<THREE.Vector3>(new THREE.Vector3(8, 0, 0));
  const clock = useRef<Clock>(new THREE.Clock());
  const [hovered, setHovered] = useState(false);
  //const { camera } = useThree();
  

  const [earthTexture, earthNormalMap, earthDisplacementMap, earthSpecularMap, earthEmissiveMap] = useTexture([
    '/images/earth-skin.jpg',
    '/images/earth-normal-map.jpg',
    '/images/earth-displacement-map.jpg',
    '/images/earth-specular-map.png',
    '/images/earth-night-map.jpg'
  ]);

  const updateEarthPosition = useCallback(() => {
    if (earthRef.current && earthRefTwo.current) {
      const angle = clock.current.getElapsedTime() * 0.1145201;
      const distance = 16;
      const x = Math.sin(angle) * distance;
      const z = Math.cos(angle) * distance;
      earthRef.current.position.set(x, 0, z);
      earthRef.current.rotation.y += 0.02;
    }
  }, []);

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  //const setCameraPosition = (position: THREE.Vector3) => {
  //  camera.position.copy(position);
  //};

  useFrame(() => {
    updateEarthPosition();
  });

  //useEffect(() => {
  //  const earthPositionRef = earthRef.current?.position;
  //}, []);

  return (
    <group ref={(earthRef as unknown) as React.Ref<THREE.Group>}>
      <mesh castShadow receiveShadow onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          shininess={10}
          displacementMap={earthDisplacementMap}
          displacementScale={displacementScale}
          emissiveMap={earthEmissiveMap}
          emissive={0xffffff}
          emissiveIntensity={hovered ? 20 : 2}
        />
      </mesh>
      <Moon />
    </group>
  );
});

export default Earth;
