import React from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Package, X } from "react-feather";
import PricesAndPackagesContent from "./PricesAnd PackagesContent";

const PricesAndPackages = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex">
      <div className="">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-30" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-80" />
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
                  <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white border-2 dark:border-[#24292f] dark:bg-[#090c10] pt-6 text-left align-middle shadow-xl transition-all">
                    <div className="relative flex text-right items-center justify-end">
                      <div className="absolute left-6 top-1 text-base font-cadizMedium dark:text-white">
                        <span className="relative">
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 418 42"
                            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-800/40"
                            preserveAspectRatio="none"
                          >
                            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                          </svg>
                          <span className="text-blue-600">
                            Simple Pricing for everyone
                          </span>
                        </span>
                      </div>
                      <span
                        onClick={closeModal}
                        className="absolute cursor-pointer mt-4 mr-3 bg-gray-100 dark:bg-[#24292f] rounded-full"
                      >
                        <X
                          className="text-black dark:text-white  m-1"
                          size={20}
                        />
                      </span>
                    </div>
                    {/* put the subscribe text here */}
                    <PricesAndPackagesContent />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div
        onClick={openModal}
        className="flex flex-row items-center justify-between w-full dark:border-2 p-2 rounded-md bg-blue-200 dark:bg-inherit"
      >
        <span className="flex dark:text-blue-600">View My Packages and Prices</span>
        <Package className="flex text-gray-500 dark:text-blue-600 " size={24} />
      </div>
    </div>
  );
};

export default PricesAndPackages;
