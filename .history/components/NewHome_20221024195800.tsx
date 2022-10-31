import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const NewHome = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center font-ApercuBold">
      {/* Hamburger menu */}
      <div className="fixed top-5 right-5 z-40">
        <div className="bg-black p-2 text-white">Menu</div>
      </div>
      <div className="relative w-full">
        {/* hero section */}
        <div className="relative flex h-screen w-full flex-row items-center bg-blue-200">
          <div className="absolute bottom-5 left-5 flex flex-col">
            <h1 className="text-4xl">Hey, I am Julius A,</h1>
            <h2 className="text-4xl">Front-End Web Developer.</h2>
          </div>
        </div>
        {/* About Section */}
        <div></div>
        {/* Projects */}
        <div></div>
        {/* Personal Entrepreneur Journey */}
        <div></div>
        {/* Contact */}
        <div></div>
        {/* Footer */}
        <div></div>
      </div>
    </div>
  );
};

export default NewHome;
