import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Copy,
  ExternalLink,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Speaker,
  Twitter,
} from "react-feather";

const Main = () => {
  return (
    <div>
      <div className="text-black dark:text-white flex flex-col md:grid md:grid-cols-3 md:gap-4 gap-2 px-4 md:px-4 py-2">
        {/* about me */}
        <div className="bg-white dark:bg-[#0d1117] col-span-3 row-span-2 my-1 p-4 rounded-lg border-2 dark:border-[#24292f]">
          <div className="flex items-center justify-between">
            <Image
              src="/Assets/newmemoji.svg"
              width={72}
              height={72}
              alt="Julius Eghan Memoji"
              className=" animate-headShake"
            />
            {/* put the dark mode toggle here */}
            <div className="flex flex-row items-center space-x-6">
              <div>
                <Link href="https://twitter.com/iamjulius_e">
                  <button className="animate-bounce">
                    <Twitter
                      className="text-black dark:text-white hover:text-[#1DA1F2]"
                      size={25}
                    />
                  </button>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/juliuseghan_/">
                  <button className="">
                    <Instagram
                      className="text-black dark:text-white hover:text-[#fb3958]"
                      size={25}
                    />
                  </button>
                </Link>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                  <button className="">
                    <Linkedin
                      className="text-black dark:text-white hover:text-[#0072b1]"
                      size={25}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base">
              Hey there, <span className="animate-wiggle">👋</span>
            </h1>
            <p className="text-sm">
              I’m
              <span className="relative whitespace-nowrap text-blue-600 mx-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.48em] w-full fill-blue-300/40"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative">Julius Eghan</span>
              </span>
              a Freelance Website and Software Developer from Accra, Ghana 🇬🇭. I
              make professional websites and mobile apps with React Js and React
              Native. I love making memorable change to the world 🌍 all while
              listening to{" "}
              <Link href="#Spotify">
                <span className="text-green-400 hover:underline cursor-pointer animate-pulse">
                  music.
                </span>
              </Link>
            </p>
            <div className="flex space-x-5 pt-2">
              <div>
                <button
                  className="text-gray-500 flex space-x-1 items-center"
                  onClick={() =>
                    navigator.clipboard.writeText("https://www.iamjulius.com/")
                  }
                >
                  <p className="flex text-sm hover:underline items-center space-x-2">
                    <span>Copy Link</span>
                  </p>
                  <Copy className="text-gray-500 " size={14} />
                </button>
              </div>
              <div>
                <Link href="https://iamjulius.notion.site/Julius-Eghan-Resume-Cover-Letter-7e2405ee191a4cc9aae0af15fd806807">
                  <button className="text-gray-500 flex space-x-1 items-center">
                    <span className="text-sm hover:underline">
                      Get my Resume
                    </span>
                    <FileText
                      className="text-gray-500 animate-wiggle"
                      size={14}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* project 1 section */}
        <div
          id="Projects"
          className="row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg p-4"
        >
          <div className="flex space-x-2">
            <div className="flex  items-center">
              <div className="flex flex-row border bg-white items-center py-1 px-2 rounded space-x-2">
                <Image
                  src="/Assets/notion-logo-1.svg"
                  width="12"
                  height="12"
                  alt=""
                  className=""
                />
                <h1 className="text-[12px] text-black">Notion</h1>
              </div>
            </div>
            <div className="flex  items-center">
              <div className="flex flex-row bg-blue-200 items-center py-1 px-2 rounded space-x-2">
                <Image
                  src="/Assets/notion-logo-1.svg"
                  width="12"
                  height="12"
                  alt=""
                  className=""
                />
                <h1 className="text-[12px] text-black">Professional</h1>
              </div>
            </div>
            <div className="flex  items-center">
              <div className="flex flex-row bg-yellow-200 items-center py-1 px-2 rounded space-x-2">
                <Image
                  src="/Assets/notion-logo-1.svg"
                  width="12"
                  height="12"
                  alt=""
                  className=""
                />
                <h1 className="text-[12px] text-black">Free and Premium</h1>
              </div>
            </div>
          </div>
          <div className="my-2 mt-6 flex  space-x-2">
            <Image
              src="/Assets/Notioncheck-logo-01.svg"
              width="80%"
              height="80%"
              alt=""
              className="flex-1"
            />
            <div className="flex-1 items-center justify-center">
              <h1 className="text-base">Notioncheck (Notion Checklists)</h1>
              <p className="text-xs text-gray-400">
                Simplify your workflows with my Functional, comprehensive and
                beginner friendly notion checklists.
              </p>
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center bg-gray-200 dark:bg-inherit dark:border-2 dark:border-[#24292f] py-1 rounded-lg hover:opacity-40 cursor-pointer">
            <Link href="/Notioncheck">
              <div className="flex py-1 px-3 items-center  cursor-pointer space-x-2 animate-pulse">
                <p className="text-black dark:text-white  text-sm leading-none">
                  View Project Page
                </p>
                <ExternalLink
                  className="text-black dark:text-white animate-wobble"
                  size={18}
                />
              </div>
            </Link>
          </div>
        </div>
        {/* project 2 section */}
        <div
          id="Projects"
          className="opacity-50 row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-8 items-center justify-center cursor-not-allowed"
        >
          <div>Project 2 Coming Soon</div>
        </div>
        {/* project 3 section */}
        <div
          id="Projects"
          className="opacity-50  row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-8 items-center justify-center cursor-not-allowed"
        >
          <div>Currently working on my project 3</div>
        </div>
        {/* project 4 section */}
        <div
          id="Projects"
          className="opacity-50 col-span-2 row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-8 items-center justify-center cursor-not-allowed"
        >
          <div>Currently working on my project 4</div>
        </div>
        {/* what i do section */}
        <div className="row-span-3 bg-white dark:bg-[#0d1117] flex flex-col p-4 border-2 dark:border-[#24292f] rounded-lg gap-2">
          <div className="flex">
            <h1 className="relative ml-2">
              <span>My</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 281 40"
                className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400/30"
                preserveAspectRatio="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                ></path>
              </svg>
              <span>Expertise!</span>
            </h1>
          </div>
          <div className="border-2 divide-y-2  dark:border-[#24292f] dark:divide-[#24292f] rounded-lg">
            <div className="flex flex-col items-start pt-2 p-2 ">
              <div className="flex items-center text-sm font-medium text-slate-500">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 flex-none stroke-slate-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <defs>
                    <linearGradient
                      id="next-icon-gradient"
                      x1="14.875"
                      y1="18"
                      x2="24"
                      y2="27.125"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".24" stopColor="#94A3B8"></stop>
                      <stop
                        offset="1"
                        stopColor="#94A3B8"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <circle
                    cx="16"
                    cy="16"
                    r="12.25"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                  <path
                    d="M11.75 21.25v-9.5L24 26"
                    stroke="url(#next-icon-gradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 11.75a.75.75 0 0 0-1.5 0v4.172l1.5 1.64V11.75Z"
                    fill="#94A3B8"
                    strokeWidth="0"
                  ></path>
                </svg>
                <span className="ml-2.5 font-cadizMedium">Next.js</span>
              </div>
              <h2 className="text-sm font-cadizMedium">
                Next Js Websites. I write clean and functional codes for
                websites like <span className="text-blue-400"> E-comerce</span>,{" "}
                <span className="text-blue-400">Portfolio sites</span>,
                <span className="text-blue-400"> Agency Sites</span> and{" "}
                <span className="text-blue-400">Saas Sites.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start pt-2  p-2 ">
              <div className="flex items-center text-sm font-medium text-slate-500">
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin h-8 w-8 flex-none stroke-blue-400"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="13"
                    ry="5"
                    transform="rotate(60 16 16)"
                  ></ellipse>
                  <ellipse
                    rx="13"
                    ry="5"
                    transform="matrix(-.5 .86603 .86603 .5 16 16)"
                  ></ellipse>
                  <circle cx="16" cy="16" r="2"></circle>
                </svg>
                <span className="ml-2.5 font-cadizMedium">React Native</span>
              </div>
              <h2 className="text-sm font-cadizMedium">
                React Native Apps. I code functioanl mobile and desktop apps
                with one of the best cross-platform frameworks.I can make you a
                functioal <span className="text-blue-400">ios</span>,{" "}
                <span className="text-blue-400">android</span>,{" "}
                <span className="text-blue-400">windows app</span>,{" "}
                <span className="text-blue-400">mac app</span>, and{" "}
                <span className="text-blue-400">web apps.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start pt-2 p-2 ">
              <Image
                className=""
                src="/Assets/webflow-icon.svg"
                width={55}
                height={22}
                alt=""
              />
              <h2 className="text-sm font-cadizMedium">
                No-code Development. I can create a stunning and functional
                no-code webapp for your idea.
              </h2>
            </div>
            <div className="flex flex-col items-start pt-2 p-2">
              <Image
                className=""
                src="/Assets/figma-icon.svg"
                width={55}
                height={47}
                alt=""
              />
              <h2 className="text-sm font-cadizMedium">
                Product Prototyping. I can create a prototype for your next
                website or software idea.
              </h2>
            </div>
            <div className="flex flex-col items-start pt-2 p-2">
              <Image
                className=" animate-wiggle"
                src="/Assets/newmemoji.svg"
                width={30}
                height={30}
                alt=""
              />
              <h2 className="text-sm font-cadizMedium">
                Partnership. I am always available for your startup partnership,
                to create the next change in the world.
              </h2>
            </div>
          </div>
        </div>
        {/* about me */}
        <div
          id="Projects"
          className="opacity-50 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-6 items-center justify-center cursor-not-allowed"
        >
          <h1>My Journey</h1>
          <p className="text-xs md:text-sm px-2 justify-center text-center">
            A story on a to-be Entrepreneur and his final dream destination 🏖️
          </p>
          <p className="text-xs md:text-sm px-2 justify-center text-center">
            Coming this fall🏕️
          </p>
        </div>
        {/* contact me */}
        <div
          id="Contact"
          className=" dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg p-2 justify-center"
        >
          <div className="">
            <h1 className="mx-2 font-cadizMedium">Get in Touch</h1>
            <p className="px-2 text-xs">
              Would you love to create some change in the world 🌍, contact me
              let make it happen.
            </p>
            <div className="border-2 m-2 divide-y-2 dark:divide-[#24292f] dark:border-[#24292f] rounded-lg">
              <div className="flex justify-between p-2">
                <p className="flex items-center space-x-2">
                  <PhoneCall className="text-black dark:text-white" size={16} />
                  <span className="text-sm">Phone Number</span>
                </p>
                <Link href="tel:+233549321512">
                  <span className="text-sm cursor-pointer text-blue-400 hover:underline">
                    +233 549321512
                  </span>
                </Link>
              </div>
              <div className="flex justify-between p-2">
                <p className="flex items-center space-x-2">
                  <Mail className="text-black dark:text-white" size={18} />
                  <span className="text-sm">Email</span>
                </p>
                <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Can I work with you 💰">
                  <span className="text-sm cursor-pointer text-blue-400 hover:underline">
                    iamjuliusbusiness@gmail.com
                  </span>
                </Link>
              </div>
            </div>
            {/* other */}
            <div className="flex items-center justify-center">
              <span className="text-[10px] text-gray-400 px-2 justify-center text-center">
                • I will respond to your message as soon as possible to
                kickstart your awsome idea •
              </span>
            </div>
            <p className="px-2 text-sm">More.</p>
            <div className="border-2 border-green-200 m-2 divide-y-2 bg-green-200 dark:bg-inherit dark:divide-[#24292f] dark:border-[#24292f] rounded-lg">
              <Link href="https://open.spotify.com/user/l9obknmym5mbo8h0mp86ilvnv?si=5c8cb40d57be471d">
                <div
                  id="Spotify"
                  className="flex justify-between cursor-pointer  p-2"
                >
                  <p className="flex items-center space-x-2">
                    <Image
                      className=""
                      src="/Assets/spotify-1.svg"
                      width={60}
                      height={22}
                      alt=""
                    />
                    <span className="text-sm text-green-600">
                      View My Profile
                    </span>
                  </p>
                  <Speaker
                    className="text-green-600 animate-wobble"
                    size={18}
                  />
                </div>
              </Link>
              {/* Put other stuff here */}
              {/* Put pinterest profile here to direct pple to it */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;