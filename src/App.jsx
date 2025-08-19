import { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import "./App.css";

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center
      "
    >
      ``
      <div
        className="  text-white w-[440px] min-h-300 border border-white
         bg-[url('/Guy-Image.png')] bg-no-repeat bg-gray-900
      "
      >
        <Navbar />

        <About />
        <Services />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
