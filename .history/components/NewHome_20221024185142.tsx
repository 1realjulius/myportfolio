import Image from "next/image";
import React from "react";

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
                I am Julius Eghan, A React Js Developer Based in Ghana.
              </h1>
            </div>
          </div>
        </div>
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
