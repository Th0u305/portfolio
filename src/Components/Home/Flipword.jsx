import React from "react";
import { FlipWords } from "../Utility/Flip-words";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import pic from "./img/pic1.jpg";

export function FlipWordsDemo() {
  const words = ["Olá", "Hola", "السلام عليكم", "Hello", "こんにちは", "Ciao"];
  AOS.init({
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
  });

  return (
    <div className="space-y-5">
      {/* <img
        className="w-[100px] h-[100px] rounded-full"
        src={pic}
        alt=""
        data-aos="fade-in"
        data-aso-delay="600"
      /> */}

      <div
        className="text-3xl md:text-4xl inline-flex"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <FlipWords words={words} />, I'm Ahnaf
      </div>
      <div
        className="flex justify-start items-center gap-2"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <Link to="https://github.com/Th0u305">
          <img
            className="w-16"
            src="https://i.ibb.co.com/LZF0cRj/github.png"
            alt=""
          />
        </Link>
        <Link>
          <img
            className="w-12"
            src="https://i.ibb.co.com/WHkvx8x/linkedin.png"
            alt=""
          />
        </Link>
        <Link>
          <img
            className="w-11"
            src="https://i.ibb.co.com/jGydLpN/facebook.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
