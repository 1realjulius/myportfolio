import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const NewHome = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const openAbout = () => {
    if (!open) {
      console.log("taped");
      setActive(true);
      setOpen(true);
    } else {
      console.log("untaped");
      setActive(false);
      setOpen(false);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center font-ApercuBold">
      <div className="relative flex h-screen w-screen flex-col items-center justify-center">
        <div className="absolute top-6 left-6">
          <div
            className={`${
              active
                ? " border-2 border-gray-400 bg-gray-300 text-black"
                : "border-2 border-gray-300"
            }
            mb-2 flex cursor-pointer select-none flex-row items-center space-x-2 rounded-full px-4 py-2
            `}
            onClick={openAbout}
          >
            <span className="text-lg text-gray-500">Tap</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-gray-500 md:h-12 md:w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
          </div>
          <div>
            <AnimatePresence mode="sync">
              {open && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                  className="absolute z-20 flex h-[180px] w-[240px] flex-col items-center justify-center rounded border-2 bg-white p-4 text-lg md:h-[200px] md:w-[600px] md:px-6 md:text-4xl"
                >
                  <h1 className="text-gray-500">
                    Hello There, I am <span className="text-black">Julius</span>
                    . I <span className="text-black">Create Brands</span>,{" "}
                    <span className="text-black">Digital Products</span>,
                    <span className="text-black">Design </span>,{" "}
                    <span className="text-black">Develop </span> and{" "}
                    <span className="text-black">Manage </span> Websites.
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="absolute flex flex-1 flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-16 w-16 text-red-300 md:h-28 md:w-28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </span>
            <h1 className="flex flex-col items-center text-4xl text-black md:text-6xl">
              <span>Website is </span>
              <span>Currently Under </span>
              <span>Maintenance</span>
            </h1>
          </div>
          <div className="flex flex-row items-center space-x-2 p-6">
            <div className="group transition-all delay-300">
              <Link
                href="tel:+233549321512"
                className="flex flex-row items-center space-x-2 rounded-full border-[3px] border-gray-300 bg-white px-4 py-4 text-gray-500 transition-transform  delay-100 group-hover:border-green-500 group-hover:bg-green-500"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 transition-transform delay-100 group-hover:text-white "
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="group">
              <Link
                href="mailto:iamjuliusbusiness@gmail.com?subject=Let's work together 💰"
                className="flex flex-row items-center space-x-2 rounded-full border-[3px] border-gray-300 bg-white px-4 py-2 text-gray-500 group-hover:border-black group-hover:bg-black"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span className="text-lg group-hover:text-white">
                  Send Message
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NewHome;
