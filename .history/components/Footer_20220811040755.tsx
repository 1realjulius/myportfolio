import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Subscribe from "./Subscribe";
import { Bell, Calendar, Smile, X } from "react-feather";

const Footer = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:text-white dark:bg-[#0d1117] border-2 dark:border-[#24292f] px-2 pb-6 pt-2 text-left align-middle shadow-xl transition-all">
                  <div className="relative flex text-right items-center justify-end">
                    <span
                      onClick={closeModal}
                      className="p-1 cursor-pointer dark:bg-[#24292f] rounded-full"
                    >
                      <X size={20} />
                    </span>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className=" mx-2 text-lg font-cadizMedium leading-4 text-gray-900 flex flex-col space-y-2"
                  >
                    <h1 className="text-red-400 flex items-center space-x-1">
                      <span>
                        <Calendar className=" animate-wobble" size={18} />
                      </span>
                      <span>
                        <span className="relative">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 418 42"
                            className="absolute top-2/3 left-0 h-[0.48em] w-full fill-red-300/40"
                            preserveAspectRatio="none"
                          >
                            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                          </svg>
                          <span>Launching Soon</span>
                        </span>
                      </span>
                    </h1>
                    <h2 className="dark:text-white text-black">
                      Ideatrends,{" "}
                      <span className="text-gray-400">
                        Internet Tips and Tricks
                      </span>
                    </h2>
                    <p className=" font-cadizMedium text-sm text-gray-400">
                      I am gathering{" "}
                      <span className="text-black dark:text-white">
                        {" "}
                        internet tips and tricks
                      </span>{" "}
                      for anyone who likes to be on the internet as part of my
                      meaningful change in the world 🌍 Journey.
                    </p>
                  </Dialog.Title>
                  <Subscribe />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="flex bg-white dark:text-white dark:bg-[#0d1117] border-2 dark:border-[#24292f] rounded-lg py-2 mb-4 px-4 mx-4 items-center justify-center">
        <p className="flex text-xs">I&apos;ve got something Awesome</p>
        <p
          onClick={openModal}
          className="flex px-1 text-xs items-center space-x-1  text-blue-600 cursor-pointer"
        >
          <span className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.48em] w-full fill-blue-300/40"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span>Check it out</span>
          </span>
          <Smile className=" animate-wiggle" size={14} />
        </p>
      </div>
    </div>
  );
};

export default Footer;
