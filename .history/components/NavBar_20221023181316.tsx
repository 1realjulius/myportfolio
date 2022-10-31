import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import EmailSubscribe from "./EmailSubscribe";
const NavBar = () => {
  const [open, setOpen] = useState(false); // State to manage the full screen Menu.If false it is closed and if true it is opened
  const [menuBtnState, setMenuBtnState] = useState(false); // State to manage the hamburger Menu.If false it is closed and if true it is opened
  const [openBtn, setBtnOpen] = useState(false);
  const [menuColour, setMenuColour] = useState(false);

  const changeMenuColour = () => {
    if (window.scrollY >= 10 && !menuBtnState) {
      setMenuColour(true);
    } else {
      setMenuColour(false);
    }
  };

  useEffect(() => {
    // Client-side-only code
    window.addEventListener("scroll", changeMenuColour);
  });

  const handleHanburgerManu = () => {
    if (!menuBtnState) {
      //open
      setMenuBtnState(true);
      setOpen(true);
      setBtnOpen(true);
    } else {
      //close
      setMenuBtnState(false);
      setOpen(false);
      setBtnOpen(false);
    }
  };

  const openNav = () => {
    setOpen(true);
    setBtnOpen(!open);
  };
  const closeNav = () => {
    setOpen(false);
    setBtnOpen(!open);
  };
  return (
    <div className="overflow-hidden w-full z-40 flex select-none">
      <div className="flex flex-col items-center justify-center ">
        {/* Hanburger Manu Itself */}
        <div
          className={`fixed top-3 right-3 z-40
            ${open ? "p-3" : "p-3"}
          `}
        >
          <div className="w-6 flex justify-end items-center">
            <div
              className="group w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
              onClick={handleHanburgerManu}
            >
              {/* the btn */}
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out mix-blend-difference 
                ${openBtn ? "rotate-45 translate-y-2.5 bg-[#000000]" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out  mix-blend-difference
                ${openBtn ? "w-0" : "w-full"}
                `}
              />
              <span
                className={`h-[2px] w-full bg-white  rounded-lg cursor-pointer transform transition duration-300 ease-in-out mix-blend-difference
                ${openBtn ? "-rotate-45 -translate-y-3 bg-[#000000]" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div className="">
          <AnimatePresence mode="sync">
            {open && (
              <div className="fixed top-0 right-0 w-full md:w-[50vw] min-h-screen bg-white z-30 text-black overflow-hidden">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  className="relative pt-8 w-full h-screen"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="px-8 ">
                      <Link href="/">
                        <div className="border-b-2 border-[#E8EAED] cursor-pointer">
                          <Image
                            src="/Assets/footerlogo.png"
                            width="182px"
                            height="40px"
                            alt=""
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex flex-col items-start justify-start text-4xl md:text-6xl">
                        <div className="py-2 px-8">
                          <Link href="/About">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>About</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Photography">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>Photography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Videography">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>Videography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Events">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300">
                              <h1>Events</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="#">
                            <div className="cursor-pointer md:py-2 text-black hover:text-[#828282] hover:duration-300 relative">
                              <span className="absolute top-0 -right-14 text-xs text-[#828282]">
                                Coming Soon
                              </span>
                              <h1>Mentoring</h1>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <EmailSubscribe />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
