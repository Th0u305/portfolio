"use client";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../ui/NavUtils";
import { cn } from "../../lib/utils";
import { NavLink, useLocation } from "react-router";
import { ContextData } from "../Context/ContextProvider";

export function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
function Navbar() {
  const { pathname } = useLocation();
  const [textColor, setTextColor] = useState("");
  const [textColor2, setTextColor2] = useState("");
  const [textColor3, setTextColor3] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setTextColor("text-cyan-300");
    }
    else{
      setTextColor("text-white")
    }
    if (pathname === "/projects") {
      setTextColor2("text-cyan-300");
    }
    else{
      setTextColor2("text-white")
    }
    if (pathname === "/contact") {
      setTextColor3("text-cyan-300");
    }
    else{
      setTextColor3("text-white")
    }
  }, [pathname]);
  const { myRef } = useContext(ContextData);

  const handleClick = () => {
    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-[90%] md:max-w-2xl mx-auto z-50"
      )}
    >
      <Menu>
        <NavLink
          to="/"
          className={`text-md sm:text-lg font-medium ${textColor}`}
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleClick}
          to="/"
          className="text-md sm:text-lg font-medium text-white"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={`text-md sm:text-lg font-medium ${textColor2}`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={`text-md sm:text-lg font-medium ${textColor3}`}
        >
          Contact
        </NavLink>
      </Menu>
    </div>
  );
}
