import { LampDemo } from "./Lamp";
import "../Home/ScrollDown.css";
import MiddleHome from "./MiddleHome";
import { CardHoverEffectDemo } from "./ProjectsCard";
import Skills from "./Skills";
import { useContext } from "react";
import { ContextData2 } from "../Root/Root";

const Home = () => {
  // const {myRef} = useContext(ContextData2);
  return (
    <div>
      <div className="relative" id="home">
        <LampDemo></LampDemo>
      </div>
      <button className="container_mouse absolute bottom-12 left-0 right-0 mx-auto w-fit">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
        <span className="text-gray-200 text-lg">Scroll Down</span>
      </button>
      <div className="max-w-6xl mx-auto mt-28 p-5">
        <MiddleHome></MiddleHome>
        <CardHoverEffectDemo></CardHoverEffectDemo>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center mt-12 mb-12">My Skills</h1>
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
};

export default Home;
