import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
    <div className="z-40 flex w-full select-none overflow-hidden">
      <div className="flex flex-col items-center justify-center ">
        {/* Hanburger Manu Itself */}
        <div
          className={`fixed top-3 right-3 z-40
            ${open ? "p-3" : "p-3"}
          `}
        >
          <div className="flex w-6 items-center justify-end">
            <div
              className="group flex h-6 w-6 cursor-pointer flex-col items-center justify-between"
              onClick={handleHanburgerManu}
            >
              {/* the btn */}
              <span
                className={`h-[2px] w-full transform cursor-pointer rounded-lg bg-white mix-blend-difference transition duration-300 ease-in-out 
                ${openBtn ? "translate-y-2.5 rotate-45 bg-[#000000]" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full transform cursor-pointer rounded-lg bg-white mix-blend-difference transition duration-300  ease-in-out
                ${openBtn ? "w-0" : "w-full"}
                `}
              />
              <span
                className={`h-[2px] w-full transform  cursor-pointer rounded-lg bg-white mix-blend-difference transition duration-300 ease-in-out
                ${openBtn ? "-translate-y-3 -rotate-45 bg-[#000000]" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div className="">
          <AnimatePresence>
            {open && (
              <div className="fixed top-0 right-0 z-30 min-h-screen w-full overflow-hidden bg-white text-black md:w-[50vw]">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  className="relative h-screen w-full pt-8"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="px-8 ">
                      <Link href="/">
                        <div className="cursor-pointer border-b-2 border-[#E8EAED]">
                          <Image
                            src="/Assets/footerlogo.png"
                            width="182"
                            height="40"
                            alt=""
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex flex-col items-start justify-start text-4xl md:text-6xl">
                        <div className="py-2 px-8">
                          <Link href="/About">
                            <div className="cursor-pointer text-black hover:text-[#828282] hover:duration-300 md:py-2">
                              <h1>About</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Photography">
                            <div className="cursor-pointer text-black hover:text-[#828282] hover:duration-300 md:py-2">
                              <h1>Photography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Videography">
                            <div className="cursor-pointer text-black hover:text-[#828282] hover:duration-300 md:py-2">
                              <h1>Videography</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="/Events">
                            <div className="cursor-pointer text-black hover:text-[#828282] hover:duration-300 md:py-2">
                              <h1>Events</h1>
                            </div>
                          </Link>
                        </div>
                        <div className="py-2 px-8">
                          <Link href="#">
                            <div className="relative cursor-pointer text-black hover:text-[#828282] hover:duration-300 md:py-2">
                              <span className="absolute top-0 -right-14 text-xs text-[#828282]">
                                Coming Soon
                              </span>
                              <h1>Mentoring</h1>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
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
