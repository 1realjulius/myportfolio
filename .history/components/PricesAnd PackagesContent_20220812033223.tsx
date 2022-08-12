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
    <div className="p-4 pt-8 font-cadizMedium">
      <div>
        <div className="px-2 pb-2">
          <div className="text-base font-cadizMedium dark:text-white">
            <span className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-800/40"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="text-blue-600">Simple Pricing for everyone</span>
            </span>
          </div>
        </div>
          <div className="">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl border-2 p-1">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-500",
                        selected
                          ? "bg-blue-200 border-2 border-blue-200"
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
                          ? "bg-green-200 border-2 border-green-200"
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
                          ? "bg-yellow-200 border-2 border-yellow-200"
                          : "text-yellow-500"
                      )
                    }
                  >
                    E-Commerce
                  </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel>
                    <div className="p-1 border-2 rounded-lg">
                  <div className="bg-blue-200 p-2 rounded-md space-y-3">
                    <div>
                      <span className="text-sm text-blue-600">Starting at</span>
                      <h2 className="text-5xl">
                        <span className="text-sm">GH₵</span> 2,000
                      </h2>
                    </div>
                    <div className="my-2">
                      <h2>Best For Blogers and Content Creators</h2>
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
                <div className="p-1 border-2 rounded-lg">
                  <div className="bg-blue-200 p-2 rounded-md space-y-3">
                    <div>
                      <span className="text-sm text-blue-600">Starting at</span>
                      <h2 className="text-5xl">
                        <span className="text-sm">GH₵</span> 2,000
                      </h2>
                    </div>
                    <div className="my-2">
                      <h2>Best For Blogers and Content Creators</h2>
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
                <div className="p-1 border-2 rounded-lg">
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
