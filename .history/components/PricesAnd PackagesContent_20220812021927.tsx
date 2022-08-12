import React from "react";
import Link from "next/link";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Download, File, FileText, Linkedin, Mail, Phone } from "react-feather";

const PricesAndPackagesContent = () => {
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
          <p className="text-sm font-cadizMedium text-gray-400">
            {" "}
            <span className="text-black dark:text-white"> innovation</span>
          </p>
        </div>
        <div className="border-2 dark:border-[#24292f] p-2 rounded-lg">
          <Tabs variant="enclosed" colorScheme='blue'>
            <TabList>
              <Tab className="">Blog</Tab>
              <Tab>Corporate</Tab>
              <Tab>E-Commerce</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div>
                  <div>
                    <span className="text-xs text-blue-500">Starting</span>
                    <h2>
                      <span className="text-xs">GH₵</span> 2,000
                    </h2>
                  </div>
                  <div>
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </span>
                      <h3>Search Engine Optimizer</h3>
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
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </span>
                      <h3>World Class Design</h3>
                    </div>
                  </div>
                  <div>
                    <div>
                        <p>Lets Talk</p>
                    </div>
                    <div className="divide-y-2 border-2 rounded-lg ">
                        <div>Phone</div>
                        <div>Email</div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>Go and sleep</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <div className="px-2 pt-1">
          <p className="text-sm text-gray-400">
            Feel free to contact me directly should you require anything
            further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricesAndPackagesContent;
