import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { NavbarDemo } from "../Navbar/Navbar";
import { createContext, useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
export const ContextData2 = createContext();

const Root = () => {
  const [bgColor, setBgColor] = useState("white");
  const { scrollYProgress } = useScroll();
  const myRef = useRef(null)
  const data = {
    myRef
  }


  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (window.innerWidth <= 768) {
      if (scrollYProgress.get() > 0.0) {
        setBgColor("gray");
      }
      if (scrollYProgress.get() > 0.1) {
        setBgColor("white");
      }
    }
    if (window.innerWidth > 768) {
      if (scrollYProgress.get() > 0.1) {
        setBgColor("gray");
      }
      if (scrollYProgress.get() > 0.3) {
        setBgColor("white");
      }
    }
  });

  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: "background-color .5s ease-in-out",
      }}
    >
      <ContextData2.Provider value={data}>
        <NavbarDemo></NavbarDemo>
        <Outlet></Outlet>
        <Footer></Footer>
      </ContextData2.Provider>
    </div>
  );
};

export default Root;
