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
        <div className="flex w-full flex-row items-center justify-center bg-blue-200">
          <div className="flex flex-col items-center space-y-4 py-10">
            <h1 className="text-8xl">FrontEnd</h1>
            <h2 className="text-4xl">Web Developer.</h2>
          </div>
        </div>
        {/* About Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center bg-yellow-300 py-10">
            <div>
              <div className="flex flex-row items-center justify-center py-2">
                <div className="relative flex h-[210px] w-[210px] rounded-full border-4 border-gray-300 dark:border-[#24292f]">
                  <Image
                    src="/Assets/Julius_Eghan.jpg"
                    // width={200}
                    // height={200}
                    layout="fill"
                    alt="Julius Eghan"
                    className="absolute rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 flex h-[40px] w-[80px] items-center justify-center">
                    <Image
                      src="/Assets/ghanaflag.svg"
                      // width={200}
                      // height={200}
                      layout="fill"
                      alt="Julius Eghan"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <h1 className="text-4xl">
                <span>I am Julius Eghan, </span>
                <span> A React Js Developer Based in Ghana.</span>
              </h1>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-5xl">Recent Projects</h1>
          </div>
          <div className="flex flex-col py-10">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-pink-300">
                <motion.img
                  src="/Assets/wbnco.png"
                  alt="Webncos Image"
                  className="h-[200px] w-[100vw] rounded-t-md object-contain"
                />
              </div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
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
