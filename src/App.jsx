import { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="max-w-screen min-h-screen flex flex-col relative">
      {/* Hero section with background image */}

      {/* Rest of your content */}
      <div className="flex flex-col items-center text-white bg-gray-900">
        <div
          className="w-full h-[60vh]  bg-[url('/Guy-Image.png')] bg-cover 
      bg-center bg-no-repeat flex items-center justify-center w-full"
        >
          <Navbar />
        </div>
        <About />
        <Services />
        <Testimonials />
        <Schedule />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
