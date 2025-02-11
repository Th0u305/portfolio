import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import "./index.css";
import { BackgroundBeamsWithCollisionDemo } from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="projects" index element={<BackgroundBeamsWithCollisionDemo></BackgroundBeamsWithCollisionDemo>}></Route>
        <Route path="contact" index element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
