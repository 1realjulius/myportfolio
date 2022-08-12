import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Tab } from "@headlessui/react";

const PricesAndPackagesContent = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="p-4 pt-8 font-cadizMedium text-black dark:text-white">
      <div>
        <div className="px-2 pb-2">
        </div>
          <div className="">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl dark:border-[#24292f]  border-2 p-1">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-500",
                        selected
                          ? "bg-blue-200 border-2 dark:border-[#24292f] dark:bg-inherit border-blue-200"
                          : "text-blue-500"
                      )
                    }
                  >
                    Blog
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-green-500",
                        selected
                          ? "bg-green-200 border-2 border-green-200 dark:border-[#24292f] dark:bg-inherit"
                          : "text-green-500"
                      )
                    }
                  >
                    Corporate
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-yellow-500",
                        selected
                          ? "bg-yellow-200 border-2 border-yellow-200 dark:border-[#24292f] dark:bg-inherit"
                          : "text-yellow-500"
                      )
                    }
                  >
                    E-Commerce
                  </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel>
                    <div className="p-1 border-2 dark:border-[#24292f]  rounded-lg">
                  <div className="bg-blue-200 dark:bg-inherit p-2 rounded-md space-y-3">
                    <div>
                      <span className="text-sm text-blue-600">Starting at</span>
                      <h2 className="text-5xl">
                        <span className="text-sm">GH₵</span> 2,000
                      </h2>
                    </div>
                    <div className="my-2">
                      <h2 className="text-blue-600">Best For Blogers and Content Creators</h2>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-sm">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <h3>World Class Design</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                        </span>
                        <h3>Cloud Hosting And Domain Name</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                            />
                          </svg>
                        </span>
                        <h3>Professional Emails</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <h3>Search Engine Optimizer</h3>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="ml-2 text-blue-600">Let&apos;s Talk</p>
                      </div>
                      <div className="divide-y-2 border-2 border-blue-600 divide-blue-600 rounded-lg ">
                        <Link href="tel:+233549321512">
                          <div className="flex items-center justify-between p-2 cursor-pointer">
                            <div className="flex items-center space-x-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                              </span>
                              <span>Phone</span>
                            </div>
                            <span className=" text-blue-600 hover:underline">
                              +233 549 321 512
                            </span>
                          </div>
                        </Link>
                        <Link href="mailto:iamjuliusbusiness@gmail.com?subject=I want to get the Blog Website Package 📄">
                          <div className="flex items-center justify-between p-2 cursor-pointer">
                            <div className="flex items-center space-x-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                              </span>
                              <span>Email</span>
                            </div>
                            <span className=" text-blue-600 hover:underline">
                              iamjuliusbusiness@gmail.com
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                <div className="p-1 border-2 dark:border-[#24292f]  rounded-lg">
                  <div className="bg-green-200 p-2 rounded-md space-y-3">
                    <div>
                      <span className="text-sm text-green-600">Starting at</span>
                      <h2 className="text-5xl">
                        <span className="text-sm">GH₵</span> 2,500
                      </h2>
                    </div>
                    <div className="my-2">
                      <h2 className="text-green-600">Best For Individuals, Institutions and SME&apos;s</h2>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <h3>World Class Design</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                        </span>
                        <h3>Cloud Hosting And Domain Name</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                            />
                          </svg>
                        </span>
                        <h3>Professional Emails</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <h3>Search Engine Optimizer</h3>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="ml-2 text-green-600">Let&apos;s Talk</p>
                      </div>
                      <div className="divide-y-2 border-2 border-green-600 divide-green-600 rounded-lg ">
                        <Link href="tel:+233549321512">
                          <div className="flex items-center justify-between p-2 cursor-pointer">
                            <div className="flex items-center space-x-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                              </span>
                              <span>Phone</span>
                            </div>
                            <span className=" text-green-600 hover:underline">
                              +233 549 321 512
                            </span>
                          </div>
                        </Link>
                        <Link href="mailto:iamjuliusbusiness@gmail.com?subject=I want to get the Corporate Website Package 💻">
                          <div className="flex items-center justify-between p-2 cursor-pointer">
                            <div className="flex items-center space-x-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                              </span>
                              <span>Email</span>
                            </div>
                            <span className=" text-green-600 hover:underline">
                              iamjuliusbusiness@gmail.com
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                <div className="p-1 border-2 dark:border-[#24292f]  rounded-lg">
                  <div className="bg-yellow-200 p-2 rounded-md space-y-3">
                    <div>
                      <span className="text-sm text-yellow-500">Starting at</span>
                      <h2 className="text-5xl">
                        <span className="text-sm">GH₵</span> 3,500
                      </h2>
                    </div>
                    <div className="my-2">
                      <h2 className="text-yellow-500">Best For Shop Owners and online Sellers</h2>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <h3>World Class Design</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                        </span>
                        <h3>Cloud Hosting And Domain Name</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                            />
                          </svg>
                        </span>
                        <h3>Professional Emails</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                        <h3>Search Engine Optimizer</h3>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="ml-2 text-yellow-500">Let&apos;s Talk</p>
                      </div>
                      <div className="divide-y-2 border-2 border-yellow-500 divide-yellow-500 rounded-lg ">
                        <Link href="tel:+233549321512">
                          <div className="flex items-center justify-between p-2 cursor-pointer">
                            <div className="flex items-center space-x-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                  />
                                </svg>
                              </span>
                              <span>Phone</span>
                            </div>
                            <span className=" text-yellow-500 hover:underline">
                              +233 549 321 512
                            </span>
                          </div>
                        </Link>
                        <Link href="mailto:iamjuliusbusiness@gmail.com?subject=I want to get the E-Commerce Website Package 🛒">
                          <div className="flex items-center justify-between p-2 cursor-pointer">
                            <div className="flex items-center space-x-2">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                              </span>
                              <span>Email</span>
                            </div>
                            <span className=" text-yellow-500 hover:underline">
                              iamjuliusbusiness@gmail.com
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        <div className="px-2 pt-1">
          <p className="text-sm text-gray-400">
            Feel free to contact me directly should you require anything
            further.
          </p>
          {/* the code for the content */}
        </div>
      </div>
    </div>
  );
};

export default PricesAndPackagesContent;
