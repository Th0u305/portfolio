import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/Bg-ani";
import AllProjects from "./AllProjects";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <div className="">
      <BackgroundBeamsWithCollision>
        <div className="mt-36 space-y-5 w-full p-6">
          <h2 className="relative z-20 text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight">
            My
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="ml-3">Projects.</span>
              </div>
            </div>
          </h2>
          <AllProjects></AllProjects>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
