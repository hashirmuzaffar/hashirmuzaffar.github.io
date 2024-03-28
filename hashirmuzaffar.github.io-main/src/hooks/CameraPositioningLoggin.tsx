import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function CameraPositionLogging({ event }: { event: string }): null {
  const { camera } = useThree();
  const cameraRef = useRef<THREE.Camera | null>(null);

  useEffect(() => {
    const logCameraPosition = () => {
      if (cameraRef.current) {
        const { x, y, z } = cameraRef.current.position;
        const roundX = Math.round(x*100)/100
        const roundY = Math.round(y*100)/100
        const roundZ = Math.round(z*100)/100
        console.log(`Camera position: x=${roundX}, y=${roundY}, z=${roundZ}`);
      }
    };

    cameraRef.current = camera;
    window.addEventListener(event, logCameraPosition);

    return () => {
      window.removeEventListener(event, logCameraPosition);
    };
  }, [camera, event]);

  return null;
}

export default CameraPositionLogging;
