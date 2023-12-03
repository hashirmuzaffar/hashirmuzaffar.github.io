import AnimatedStars from "./animatedstars";
import Earth from "./earth";
import CameraPositionLogging from "../../hooks/CameraPositioningLoggin";
import Sun from "./sun";
import Mars from "./mars";
import Venus from "./venus";
import Mercury from "./mercury";
import Jupiter from "./jupiter";
import Saturn from "./Saturn";
import Uranus from "./uranus";
import Neptune from "./neptune";

const MainContainer = () =>{
    return(
    <>
     <CameraPositionLogging event='mousedown' />
        <AnimatedStars/>
        <Sun/>
        <Mercury/>
        <Venus/>
        <Earth displacementScale={0.1} />
        <Mars/>
        <Jupiter/>
        <Saturn/>
        <Uranus/>
        <Neptune/>
    </>
    );

}

export default MainContainer;