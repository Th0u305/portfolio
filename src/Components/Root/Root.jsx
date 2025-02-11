import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { NavbarDemo } from "../Navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import "./loader.css";
import ContextProvider from "../Context/ContextProvider";
import { ToastContainer } from "react-toastify";
import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'framer-motion';

const Root = () => {
  const [bgColor, setBgColor] = useState("#e6e4e4");
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  const lenisRef = useRef(null)
  useEffect(() => {
    function update(data) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])
  

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (window.innerWidth <= 768) {
      if (scrollYProgress.get() > 0.0) {
        setBgColor("gray");
      }
      if (scrollYProgress.get() > 0.1) {
        setBgColor("#ffff");
      }
    }
    if (window.innerWidth >= 768) {
      if (scrollYProgress.get() > 0.0) {
        setBgColor("gray");
      }
      if (scrollYProgress.get() > 0.1) {
        setBgColor("#ffff");
      }
    }
  });

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: "background-color .5s ease-in-out",
      }}
    >
      {loading ? (
        <div className="h-screen bg-black flex justify-center items-center">
          <div className="loader">
            <div className="light"></div>
            <div className="black_overlay"></div>
          </div>
        </div>
      ) : (
        <ContextProvider>
          <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root />
          <ToastContainer />
          <NavbarDemo></NavbarDemo>
          <Outlet></Outlet>
          <Footer></Footer>
        </ContextProvider>
      )}
    </div>
  );
};

export default Root;
