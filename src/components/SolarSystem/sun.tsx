import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useCallback } from "react";



const Sun = React.memo( () => {

  const sunRef = useRef<THREE.Mesh>(null);

  const [sunTexture ] = useTexture([
    'public/images/sun-skin.jpg',
  ]);

  const updateSunPosition = useCallback(()=>{
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.02;
      }
  },[])

  useFrame(() => {
    updateSunPosition()
  });

  return (
    <mesh receiveShadow ref={sunRef}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshPhongMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissiveIntensity={0.6}
        emissive={0xFFFFFF}
      />
      <pointLight castShadow intensity={5.0}/>
    </mesh>
  );
}
);

export default Sun;