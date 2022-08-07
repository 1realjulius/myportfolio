import React from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X } from "react-feather";
import HireMe from "./HireMe";

const Banner = () => {
let [isOpen, setIsOpen] = useState(false);

function closeModal() {
setIsOpen(false);
}

function openModal() {
setIsOpen(true);
}

return (
<div
  className=" sticky top-0 z-20 flex flex-col items-center justify-center  rounded-lg dark:bg-[#0d1117] bg-white mb-4 mt-2 mx-4 p-2 border-2 dark:border-[#24292f]">
  <div className="">
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white border-2 dark:border-[#24292f] dark:bg-[#090c10] pt-6 text-left align-middle shadow-xl transition-all">
                <div className="relative flex text-right items-center justify-end">
                  <span
                    className="absolute left-0 text-[10px] font-ApercuBold mx-6 mt-4 bg-blue-300 text-blue-800 py-1 px-2 rounded">
                    Front-End Web Developer
                  </span>
                  <span onClick={closeModal}
                    className="absolute cursor-pointer mt-4 mr-3 bg-gray-100 dark:bg-[#24292f] rounded-full">
                    <X className="text-black dark:text-white  m-1" size={20} />
                  </span>
                </div>
                {/* put the subscribe text here */}
                <HireMe />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </div>
  <p className="text-sm dark:text-white text-black">
    I am Seeking a Job as Front-End Web Developer.{" "}
    <span onClick={openModal} className="text-green-500 hover:underline cursor-pointer animate-pulse">
      Hire Me
    </span>
  </p>
  <section id="secondary-features" aria-label="Features for simplifying everyday business tasks"
        className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Simplify everyday business
                    tasks.</h2>
                <p className="mt-4 text-lg tracking-tight text-slate-700">Because you’d probably be a little confused if we
                    suggested you complicate your everyday business tasks instead.</p>
            </div>
            <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
                <div>
                    <div className="mx-auto max-w-2xl">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <defs>
                                    <linearGradient id=":R2mdm:" x1="11.5" y1="18" x2="36" y2="15.5"
                                        gradientUnits="userSpaceOnUse">
                                        <stop offset=".194" stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#6692F1"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:R2mdm:)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600">Reporting</h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Stay on top of things with always up-to-date
                            reporting features.</p>
                        <p className="mt-4 text-sm text-slate-600">We talked about reporting in the section above but we
                            needed three items here, so mentioning it one more time for posterity.</p>
                    </div>
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <img alt="" sizes="52.75rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75"
                                width="1688" height="856" decoding="async" data-nimg="future" className="w-full"
                                loading="lazy"></div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto max-w-2xl">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path opacity=".3"
                                    d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600">Inventory</h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Never lose track of what’s in stock with
                            accurate inventory tracking.</p>
                        <p className="mt-4 text-sm text-slate-600">We don’t offer this as part of our software but that
                            statement is inarguably true. Accurate inventory tracking would help you for sure.</p>
                    </div>
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <img alt="" sizes="52.75rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75"
                                width="1688" height="856" decoding="async" data-nimg="future" className="w-full"
                                loading="lazy"></div>
                    </div>
                </div>
                <div>
                    <div className="mx-auto max-w-2xl">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                                    fill="#fff"></path>
                                <path
                                    d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600">Contacts</h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Organize all of your contacts, service
                            providers, and invoices in one place.</p>
                        <p className="mt-4 text-sm text-slate-600">This also isn’t actually a feature, it’s just some
                            friendly advice. We definitely recommend that you do this, you’ll feel really organized and
                            professional.</p>
                    </div>
                    <div className="relative mt-10 pb-10">
                        <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"></div>
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <img alt="" sizes="52.75rem"
                                srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75"
                                width="1688" height="856" decoding="async" data-nimg="future" className="w-full"
                                loading="lazy"></div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:mt-20 lg:block">
                <div className="grid grid-cols-3 gap-x-8" role="tablist" aria-orientation="horizontal">
                    <div className="relative">
                        <div className="w-9 rounded-lg bg-blue-600"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <defs>
                                    <linearGradient id=":Rardm:" x1="11.5" y1="18" x2="36" y2="15.5"
                                        gradientUnits="userSpaceOnUse">
                                        <stop offset=".194" stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#6692F1"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:Rardm:)" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-blue-600"><button
                                className="[&amp;:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:Rirdm:"
                                role="tab" type="button" aria-selected="true" tabindex="0"
                                aria-controls="headlessui-tabs-panel-:Rbbdm:"><span
                                    className="absolute inset-0"></span>Reporting</button></h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Stay on top of things with always up-to-date
                            reporting features.</p>
                        <p className="mt-4 text-sm text-slate-600">We talked about reporting in the section above but we
                            needed three items here, so mentioning it one more time for posterity.</p>
                    </div>
                    <div className="relative opacity-75 hover:opacity-100">
                        <div className="w-9 rounded-lg bg-slate-500"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path opacity=".3"
                                    d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                                <path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-slate-600"><button
                                className="[&amp;:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:Rkrdm:"
                                role="tab" type="button" aria-selected="false" tabindex="-1"
                                aria-controls="headlessui-tabs-panel-:Rjbdm:"><span
                                    className="absolute inset-0"></span>Inventory</button></h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Never lose track of what’s in stock with
                            accurate inventory tracking.</p>
                        <p className="mt-4 text-sm text-slate-600">We don’t offer this as part of our software but that
                            statement is inarguably true. Accurate inventory tracking would help you for sure.</p>
                    </div>
                    <div className="relative opacity-75 hover:opacity-100">
                        <div className="w-9 rounded-lg bg-slate-500"><svg aria-hidden="true" className="h-9 w-9" fill="none">
                                <path opacity=".5"
                                    d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
                                    fill="#fff"></path>
                                <path
                                    d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
                                    fill="#fff"></path>
                            </svg></div>
                        <h3 className="mt-6 text-sm font-medium text-slate-600"><button
                                className="[&amp;:not(:focus-visible)]:focus:outline-none" id="headlessui-tabs-tab-:Rmrdm:"
                                role="tab" type="button" aria-selected="false" tabindex="-1"
                                aria-controls="headlessui-tabs-panel-:Rrbdm:"><span
                                    className="absolute inset-0"></span>Contacts</button></h3>
                        <p className="mt-2 font-display text-xl text-slate-900">Organize all of your contacts, service
                            providers, and invoices in one place.</p>
                        <p className="mt-4 text-sm text-slate-600">This also isn’t actually a feature, it’s just some
                            friendly advice. We definitely recommend that you do this, you’ll feel really organized and
                            professional.</p>
                    </div>
                </div>
                <div className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
                    <div className="-mx-5 flex">
                        <div className="px-5 transition duration-500 ease-in-out [&amp;:not(:focus-visible)]:focus:outline-none"
                            style="transform: translateX(0%);" aria-hidden="false" id="headlessui-tabs-panel-:Rbbdm:"
                            role="tabpanel" tabindex="0" aria-labelledby="headlessui-tabs-tab-:Rirdm:">
                            <div
                                className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                <img alt="" sizes="52.75rem"
                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&amp;w=3840&amp;q=75"
                                    width="1688" height="856" decoding="async" data-nimg="future" className="w-full"
                                    loading="lazy"></div>
                        </div>
                        <div className="px-5 transition duration-500 ease-in-out [&amp;:not(:focus-visible)]:focus:outline-none opacity-60"
                            style="transform: translateX(0%);" aria-hidden="true" id="headlessui-tabs-panel-:Rjbdm:"
                            role="tabpanel" tabindex="-1" aria-labelledby="headlessui-tabs-tab-:Rkrdm:">
                            <div
                                className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                <img alt="" sizes="52.75rem"
                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&amp;w=3840&amp;q=75"
                                    width="1688" height="856" decoding="async" data-nimg="future" className="w-full"
                                    loading="lazy"></div>
                        </div>
                        <div className="px-5 transition duration-500 ease-in-out [&amp;:not(:focus-visible)]:focus:outline-none opacity-60"
                            style="transform: translateX(0%);" aria-hidden="true" id="headlessui-tabs-panel-:Rrbdm:"
                            role="tabpanel" tabindex="-1" aria-labelledby="headlessui-tabs-tab-:Rmrdm:">
                            <div
                                className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                <img alt="" sizes="52.75rem"
                                    srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&amp;w=3840&amp;q=75"
                                    width="1688" height="856" decoding="async" data-nimg="future" className="w-full"
                                    loading="lazy"></div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10">
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
);
};

export default Banner;