import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FlipWordsDemo } from "./Flipword";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { ContextData } from "../Context/ContextProvider";

const MiddleHome = () => {
  useState(() => {
    AOS.init({
      easing: "ease-in-out", // default easing for AOS animations
    });
  }, []);

  const { myRef } = useContext(ContextData);

  return (
    <div
      className="flex flex-col justify-evenly items-center"
      id="about"
      ref={myRef}
    >
      <div className="w-full mb-24" data-aos="fade-down" data-aos-delay="300">
        <h1 className="text-6xl">
          I take a user-first approach to design, making sure every solution is
          customized to meet the distinct needs of the audience.
        </h1>
      </div>
      <hr className="h-px my-8 border-0 bg-gray-700 w-full" data-aos="fade-down" data-aos-delay="400"></hr>
      <div className="grid md:grid-cols-2 gap-8 md:gap-0">
        <div className="space-y-8">
          <FlipWordsDemo></FlipWordsDemo>
          <button
            className="relative h-[3rem] w-[10rem] inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#34e5eb_0%,#ffff_50%,#81d3e3_100%)]" />
            <span className="inline-flex gap-3 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Download CV <FaDownload className="text-lg" />
            </span>
          </button>
        </div>
        <div>
          <h1
            className="text-xl md:text-2xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            As a junior web developer, I focus on delivering high-quality code
            and polished user experiences.I enjoy turning complex ideas into
            simple, elegant solutions that work seamlessly across devices.
          </h1>
          <h1
            className="text-xl md:text-2xl mt-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            My experience with React, Tailwind CSS , MongoDB and Express.js
            challenges in both front-end and back-end development. My goal is to
            build seamless, user-friendly applications while constantly learning
            and improving with every project.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MiddleHome;
