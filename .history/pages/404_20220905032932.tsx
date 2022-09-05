// pages/404.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex min-h-screen items-center justify-center  flex-col dark:text-white bg-[#f7f2f2] dark:bg-[#090c10]  font-cadizMedium  md:px-8 md:pb-8">
      <div className="">
        <div className="flex divide-x-2 mb-4 dark:divide-[#24292f] items-center">
          <h1 className="pr-6 py-2 text-4xl font-sans">404</h1>
          <p className="pl-6 py-2 text-base ">This page could not be found.</p>
        </div>
        <Link href="/">
          <div className="flex items-center justify-center p-2 space-x-2 bg-white dark:bg-[#0d1117] border-2 border-gray-300 dark:border-[#24292f] rounded-lg  hover:opacity-80 animate-pulse">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            <h1 className="flex items-center space-x-2 cursor-pointer text-gray-400 text-base hover:text-white">
              <span>Go Back Home.</span>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
