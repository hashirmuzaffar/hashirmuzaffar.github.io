import { Canvas } from "@react-three/fiber";
import MainContainer from "./mainContainer";
import { OrbitControls } from "@react-three/drei";

function SolarSystem() {
    return(
    <Canvas shadows 
      camera={{fov: 75, near: 0.1, far: 1000, position: [16,8.5,19.5]}}>
        <color attach='background' args={['black']}/>
        <OrbitControls/> 
      <MainContainer/>
    </Canvas>
    );
} 
    
export default SolarSystem