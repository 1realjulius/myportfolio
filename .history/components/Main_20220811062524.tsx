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
            <h1 className="relative ml-2 mb-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.48em] w-full fill-blue-300/40"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span>My Expertise!</span>
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
              <span>
                <svg
                  width="60"
                  height="18"
                  viewBox="0 0 89 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.495 8.724C28.495 7.124 26.96 5.446 24.292 5.446C21.3 5.446 18.015 7.649 17.512 12.046C16.998 16.486 19.749 18.459 22.522 18.459C25.295 18.459 26.747 17.374 28.232 15.927C26.955 14.317 25.306 15.061 24.99 15.225C24.4669 15.5165 23.8745 15.6606 23.276 15.642C22.206 15.642 21.114 15.16 21.114 13.154C27.97 12.474 28.494 10.314 28.494 8.724H28.495ZM25.097 8.987C25.053 9.48 24.857 10.324 21.385 10.797C22.115 8.187 23.515 7.991 24.158 7.991C24.2883 7.98505 24.4184 8.00722 24.5394 8.056C24.6604 8.10478 24.7694 8.17903 24.8592 8.27371C24.9489 8.36839 25.0172 8.48127 25.0595 8.6047C25.1017 8.72812 25.1169 8.85919 25.104 8.989L25.097 8.987ZM13.485 9.415L11.891 14.447L10.766 5.71C8.256 5.71 6.906 7.508 6.202 9.404L4.258 14.458L3.985 9.458C3.837 7.134 1.715 5.72 0 5.72L2.074 18.36C4.704 18.35 6.124 16.562 6.867 14.666L8.511 10.369C8.526 10.544 9.647 18.361 9.647 18.361C12.289 18.361 13.709 16.684 14.47 14.853L18.17 5.721C15.565 5.721 14.192 7.508 13.483 9.415H13.485ZM38.191 5.415C36.564 5.415 35.321 6.303 34.271 7.607V7.597L35.209 0C33.047 0 31.289 1.886 30.951 4.692L29.325 18.262C30.57 18.262 31.891 17.9 32.601 16.979C33.235 17.801 34.184 18.459 35.593 18.459C39.239 18.459 41.74 14.206 41.74 10.215C41.718 6.575 39.96 5.425 38.202 5.425L38.191 5.415ZM37.851 11.938C37.471 14.163 36.235 15.676 35.046 15.676C33.857 15.676 33.332 15.139 33.332 15.139C33.562 13.189 33.704 11.993 34.14 10.962C34.576 9.931 35.614 8.287 36.695 8.287C37.755 8.287 38.235 9.701 37.852 11.937L37.851 11.938ZM50.833 5.711H48.289L48.299 5.579C48.474 3.913 48.867 3.036 50.163 2.893C51.048 2.805 51.441 2.345 51.539 1.841L51.856 0.0760002C46.756 0.0430002 45.142 2.256 44.731 5.634L44.721 5.711H44.666C43.836 5.711 42.92 6.654 42.766 7.849L42.711 8.287H44.415L42.985 20.147L42.547 22.274C42.602 22.274 42.667 22.284 42.721 22.284C45.111 22.196 46.641 20.3 46.979 17.548L48.095 8.285H48.895C49.681 8.285 50.599 7.495 50.759 6.18L50.833 5.711ZM64.065 5.491C61.128 5.491 58.355 7.661 57.505 11.071C56.655 14.481 57.943 18.514 62.265 18.514C66.587 18.514 69.062 14.314 69.062 10.818C69.066 7.343 66.72 5.49 64.066 5.49L64.065 5.491ZM65.255 11.827C65.103 13.373 64.425 15.719 62.569 15.719C60.713 15.719 60.964 12.979 61.144 11.674C61.341 10.282 62.116 8.298 63.786 8.298C65.288 8.298 65.429 10.085 65.256 11.828L65.255 11.827ZM83.575 9.404L81.981 14.436C81.938 14.041 80.857 5.699 80.857 5.699C78.347 5.699 77.003 7.497 76.299 9.393L74.355 14.447C74.345 14.085 74.082 9.447 74.082 9.447C73.924 7.123 71.804 5.709 70.082 5.709L72.145 18.349C74.775 18.339 76.195 16.551 76.938 14.655L78.576 10.358C78.586 10.533 79.712 18.35 79.712 18.35C82.354 18.35 83.768 16.673 84.535 14.842L88.238 5.71C85.64 5.71 84.264 7.497 83.565 9.404H83.575ZM53.235 0.0740013L51.095 17.404L50.657 19.542C50.711 19.542 50.777 19.552 50.831 19.552C53.133 19.519 54.771 17.492 55.078 14.937L56.311 4.994C56.685 1.957 54.884 0.0720005 53.235 0.0720005V0.0740013Z"
                    fill="#4353FF"
                  />
                </svg>
              </span>
              <h2 className="text-sm font-cadizMedium">
                No-code Development. I can create a stunning and functional
                no-code webapp for your idea.
              </h2>
            </div>
            <div className="flex flex-col items-start pt-2 p-2">
              <span>
                <svg
                  width="60"
                  height="48"
                  viewBox="0 0 100 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.95021 47.6667C12.3335 47.6667 15.8919 44.1083 15.8919 39.725V31.7833H7.95021C3.56688 31.7833 0.00854492 35.3417 0.00854492 39.725C0.00854492 44.1083 3.56688 47.6667 7.95021 47.6667Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M0 23.8333C0 19.45 3.55833 15.8917 7.94167 15.8917H15.8833V31.7833H7.94167C3.55833 31.7833 0 28.225 0 23.8417V23.8333Z"
                    fill="#A259FF"
                  />
                  <path
                    d="M0 7.94167C0 3.55833 3.55833 0 7.94167 0H15.8833V15.8917H7.94167C3.55833 15.8917 0 12.3333 0 7.95V7.94167Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M15.8169 0H23.7586C28.1419 0 31.7002 3.55833 31.7002 7.94167C31.7002 12.325 28.1419 15.8833 23.7586 15.8833H15.8169V0Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M31.7836 23.8333C31.7836 28.2167 28.2252 31.775 23.8419 31.775C19.4586 31.775 15.8169 28.2167 15.8169 23.8333C15.8169 19.45 19.3752 15.8917 23.7586 15.8917C28.1419 15.8917 31.7002 19.45 31.7002 23.8333H31.7836Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M40.4668 13.1666V29.8166H42.6085V21.8666H47.7585V19.8H42.6085V15.25H49.3001V13.1666H40.4668ZM53.1751 16.55C53.9501 16.55 54.5751 15.925 54.5751 15.15C54.5751 14.375 53.9418 13.8333 53.1751 13.8333C52.4085 13.8333 51.7751 14.4583 51.7751 15.2333C51.7751 15.6083 51.9251 15.9583 52.1918 16.2333C52.4585 16.5083 52.8085 16.65 53.1918 16.65L53.1751 16.55ZM52.0918 18.65V29.8166H54.1501V18.65H52.0251H52.0918ZM62.1918 18.3166C59.3418 18.3166 57.3585 20.8166 57.3585 23.5833C57.3585 26.35 59.3585 28.8333 62.1918 28.8333C62.7814 28.8436 63.3666 28.7311 63.9103 28.503C64.4541 28.2749 64.9444 27.9362 65.3501 27.5083V28.9916C65.3442 29.8828 64.9984 30.7382 64.3835 31.3833C64.0728 31.7003 63.7019 31.952 63.2927 32.1237C62.8834 32.2954 62.444 32.3837 62.0001 32.3833C61.3186 32.3618 60.6582 32.1416 60.1001 31.75L59.0168 33.6083C59.8487 34.1433 60.8096 34.4441 61.7981 34.4789C62.7866 34.5138 63.7663 34.2814 64.6338 33.8062C65.5014 33.3311 66.2247 32.6308 66.7277 31.7791C67.2307 30.9274 67.4946 29.9558 67.4918 28.9666V18.6333H65.3501V19.6333C64.9444 19.2054 64.4541 18.8667 63.9103 18.6386C63.3666 18.4104 62.7814 18.298 62.1918 18.3083V18.3166ZM59.5085 23.5833C59.4597 23.0415 59.5633 22.4969 59.8078 22.0109C60.0522 21.525 60.4277 21.1171 60.8918 20.8333C61.8418 20.25 63.0335 20.25 63.9751 20.8333C64.9168 21.4166 65.4501 22.4833 65.3585 23.5833C65.4073 24.1251 65.3036 24.6697 65.0591 25.1557C64.8147 25.6416 64.4392 26.0495 63.9751 26.3333C63.0251 26.9166 61.8335 26.9166 60.8918 26.3333C59.9501 25.75 59.4168 24.6833 59.5085 23.5833Z"
                    fill="black"
                  />
                  <path
                    d="M75.2167 20.5C74.6007 20.5022 74.0106 20.7478 73.5751 21.1834C73.1395 21.6189 72.8939 22.209 72.8917 22.825V29.8916H70.75V18.725H72.8917V19.6666C73.5417 18.8 74.575 18.3 75.6583 18.3166C77.025 18.2833 78.3 19.0166 78.975 20.2083C79.8083 19.0416 81.0083 18.3333 82.3083 18.3166C84.75 18.3166 86.2667 20.2833 86.275 22.7166V29.825H84.1333V22.7416C84.1961 22.3004 84.1312 21.8504 83.9463 21.4449C83.7614 21.0394 83.4642 20.6953 83.0899 20.4534C82.7156 20.2115 82.2798 20.0818 81.8342 20.0797C81.3885 20.0776 80.9515 20.2032 80.575 20.4416C80.2005 20.6858 79.9041 21.0323 79.7209 21.44C79.5377 21.8478 79.4755 22.2996 79.5417 22.7416V29.8083H77.4833V22.75C77.4811 22.134 77.2355 21.5439 76.7999 21.1084C76.3644 20.6728 75.7743 20.4272 75.1583 20.425L75.2167 20.5ZM97.7167 19.9166C97.2292 19.408 96.6428 19.0044 95.9937 18.7307C95.3445 18.4569 94.6462 18.3189 93.9417 18.325C90.75 18.325 88.525 21.025 88.525 24.1583C88.525 27.2916 90.775 29.9916 93.9417 29.9916C94.6462 29.9977 95.3445 29.8597 95.9937 29.586C96.6428 29.3122 97.2292 28.9086 97.7167 28.4V29.6666H99.8583V18.5H97.7167V19.9166ZM90.6333 24.25C90.525 22.9166 91.175 21.6333 92.3167 20.9333C93.4583 20.2333 94.8167 20.2333 96.0333 20.9333C96.5906 21.2792 97.0422 21.7713 97.339 22.3561C97.6358 22.941 97.7665 23.596 97.7167 24.25C97.825 25.5833 97.175 26.8666 96.0333 27.5666C94.8917 28.2666 93.5333 28.2666 92.3167 27.5666C91.7594 27.2208 91.3078 26.7286 91.011 26.1438C90.7142 25.559 90.5835 24.9039 90.6333 24.25Z"
                    fill="black"
                  />
                </svg>
              </span>
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
        <div className=" dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] border-2 rounded-lg items-center justify-center p-4">
          <div className=" flex flex-col border-2 dark:border-[#24292f] divide-y-2 dark:divide-[#24292f] rounded-md">
            <div className="p-2">
              <div className="flex">
                <h1 className="relative">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.48em] w-full fill-blue-300/40"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span>My Journey as Entrepreneur 🏝️</span>
                </h1>
              </div>
              <div className="flex flex-col">
                <h2 className="text-sm font-cadizMedium">
                  Would be entrepreneurs live in a sea of dreams ⛵. Their
                  destinations are private islands, places to build, create
                  and transform their particular dreams into reality. Being an
                  entrepreneur entails envisioning your island, and even more
                  important, it means getting in the boat and rowing to your
                  island🏝️. All dreamers may one day be entrepreneurs if they
                  marshal the resources both externaly and internaly needed to
                  transform their dreams into reality.
                </h2>
                <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </span>
                    <span>Entrepreneurs Are Made Not Born</span>                    
                </div>
                <h2 className="text-sm font-cadizMedium"> I am going to be sharing my journey with you as well
                  as my inspirations and motivations.
                </h2>
              </div>
            </div>
            <div>
              <div className="bg-gray-600 items-center justify-center rounded-md m-2 px-4 py-2 ">
                <p>Journey Coming Soon 🏝️</p>
              </div>
            </div>
          </div>
        </div>
        {/* contact me */}
        <div
          id="Contact"
          className=" dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg p-2 justify-center"
        >
          <div className="">
            <div className="flex">
              <h1 className="relative ml-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.48em] w-full fill-blue-300/40"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span>Get in touch</span>
              </h1>
            </div>
            <h2 className="text-sm px-2 font-cadizMedium">
              Would you love to create some change in the world 🌍, contact me
              let make it happen.
            </h2>
            <div className="border-2 m-2 divide-y-2 dark:divide-[#24292f] dark:border-[#24292f] rounded-lg">
              <div className="flex justify-between p-2">
                <div className="flex items-center space-x-2">
                  <PhoneCall className="text-black dark:text-white" size={16} />
                  <span className="text-sm">Phone</span>
                </div>
                <Link href="tel:+233549321512">
                  <span className="text-sm cursor-pointer text-blue-400 hover:underline">
                    +233 549321512
                  </span>
                </Link>
              </div>
              <div className="flex justify-between p-2">
                <div className="flex items-center space-x-2">
                  <Mail className="text-black dark:text-white" size={18} />
                  <span className="text-sm">Email</span>
                </div>
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
            <div className="m-2 border-2 dark:border-[#24292f]  divide-y-2 dark:divide-[#24292f] rounded-lg">
              {/* spotify */}
              <div className="  bg-green-200 dark:bg-inherit m-1 rounded-md ">
                <Link href="https://open.spotify.com/user/l9obknmym5mbo8h0mp86ilvnv?si=5c8cb40d57be471d">
                  <div
                    id="Spotify"
                    className="flex justify-between cursor-pointer  p-2"
                  >
                    <div className="flex items-center space-x-2">
                      <span>
                        <svg
                          className="w-18 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="74.428 1369.145 9772.44 2931.018"
                        >
                          <path
                            fill="#2EBD59"
                            d="M1539.928 1369.145c-809.356 0-1465.5 656.126-1465.5 1465.482 0 809.443 656.144 1465.535 1465.5 1465.535 809.392 0 1465.5-656.091 1465.5-1465.535 0-809.304-656.074-1465.412-1465.518-1465.412l.018-.07zm672.069 2113.646c-26.32 43.173-82.565 56.7-125.598 30.397-344.137-210.332-777.297-257.845-1287.421-141.312-49.157 11.271-98.157-19.547-109.356-68.688-11.253-49.157 19.424-98.157 68.704-109.356 558.249-127.628 1037.101-72.695 1423.378 163.344 43.05 26.426 56.699 82.601 30.275 125.65l.018-.035zm179.374-398.981c-33.145 53.777-103.46 70.647-157.167 37.624-393.837-242.094-994.384-312.217-1460.32-170.781-60.428 18.252-124.25-15.803-142.59-76.125-18.2-60.428 15.873-124.128 76.195-142.503 532.227-161.489 1193.865-83.265 1646.239 194.723 53.726 33.075 70.7 103.425 37.625 157.079l.018-.017zm15.4-415.52c-472.395-280.542-1251.599-306.337-1702.556-169.47-72.414 21.962-148.994-18.918-170.939-91.333-21.945-72.449 18.9-148.977 91.367-170.992 517.667-157.149 1378.229-126.787 1922.022 196.035 65.135 38.657 86.503 122.779 47.897 187.827-38.5 65.135-122.85 86.607-187.774 47.933h-.017zM4061.569 2722.05c-253.033-60.34-298.078-102.689-298.078-191.678 0-84.069 79.152-140.646 196.857-140.646 114.1 0 227.237 42.962 345.852 131.407 3.588 2.678 8.086 3.744 12.513 3.045 4.428-.665 8.348-3.098 10.938-6.755l123.55-174.16c5.075-7.175 3.692-17.062-3.15-22.54-141.172-113.277-300.142-168.35-485.956-168.35-273.21 0-464.047 163.957-464.047 398.545 0 251.562 164.622 340.637 449.102 409.394 242.13 55.772 282.993 102.498 282.993 186.025 0 92.557-82.636 150.097-215.618 150.097-147.699 0-268.169-49.752-402.937-166.46-3.342-2.888-7.928-4.199-12.162-3.954-4.463.367-8.541 2.432-11.375 5.845l-138.53 164.867c-5.81 6.842-5.075 17.062 1.646 22.978 156.799 139.982 349.648 213.92 557.759 213.92 294.401 0 484.644-160.86 484.644-409.832.525-210.175-125.299-326.55-433.474-401.52l-.527-.228zM5161.617 2472.5c-127.609 0-232.277 50.26-318.587 153.247v-115.92c0-9.152-7.42-16.607-16.555-16.607h-226.572c-9.152 0-16.555 7.455-16.555 16.607V3797.86c0 9.152 7.402 16.607 16.555 16.607h226.572c9.135 0 16.555-7.454 16.555-16.607v-406.577c86.328 96.88 191.013 144.218 318.587 144.218 237.107 0 477.138-182.524 477.138-531.439.35-349.002-239.75-531.579-476.875-531.579l-.263.017zm213.675 531.562c0 177.678-109.445 301.665-266.158 301.665-154.926 0-271.791-129.623-271.791-301.665 0-172.024 116.865-301.664 271.791-301.664 154.176-.018 266.176 126.822 266.176 301.646l-.018.018zM6253.966 2472.5c-305.357 0-544.582 235.13-544.582 535.359 0 296.957 237.58 529.619 540.837 529.619 306.442 0 546.401-234.342 546.401-533.417 0-298.042-238.35-531.526-542.674-531.526l.018-.035zm0 834.994c-162.418 0-284.865-130.498-284.865-303.52 0-173.758 118.213-299.845 281.119-299.845 163.468 0 286.737 130.497 286.737 303.642 0 173.723-118.999 299.723-282.975 299.723h-.016zM7448.688 2493.221h-249.322v-254.905c0-9.135-7.385-16.59-16.537-16.59h-226.537c-9.17 0-16.607 7.455-16.607 16.59v254.905h-108.938c-9.117 0-16.503 7.454-16.503 16.607v194.722c0 9.135 7.386 16.607 16.503 16.607h108.938v503.842c0 203.612 101.342 306.845 301.209 306.845 81.271 0 148.697-16.783 212.24-52.815 5.162-2.888 8.364-8.452 8.364-14.367v-185.43c0-5.723-2.976-11.13-7.875-14.122-4.935-3.098-11.077-3.255-16.135-.753-43.646 21.963-85.837 32.095-133 32.095-72.694 0-105.122-33.005-105.122-106.977v-468.229h249.322c9.152 0 16.52-7.455 16.52-16.607v-194.705c.35-9.152-7-16.607-16.274-16.607l-.246-.106zM8317.388 2494.218v-31.308c0-92.103 35.314-133.175 114.52-133.175 47.232 0 85.173 9.38 127.662 23.555 5.233 1.646 10.692.823 14.945-2.31 4.375-3.133 6.843-8.155 6.843-13.475V2146.58c0-7.298-4.69-13.755-11.726-15.908-44.888-13.353-102.322-27.055-188.316-27.055-209.266 0-319.883 117.845-319.883 340.672v47.95h-108.85c-9.135 0-16.625 7.455-16.625 16.59v195.72c0 9.135 7.49 16.607 16.625 16.607h108.85v777.156c0 9.152 7.385 16.607 16.521 16.607h226.572c9.152 0 16.607-7.455 16.607-16.607V2721.21h211.54l324.047 776.964c-36.785 81.637-72.959 97.877-122.342 97.877-39.918 0-81.953-11.918-124.934-35.438-4.042-2.223-8.837-2.59-13.194-1.242-4.323 1.522-7.962 4.742-9.8 8.942l-76.79 168.472c-3.658 7.963-.525 17.309 7.14 21.438 80.167 43.417 152.531 61.949 241.973 61.949 167.299 0 259.77-77.927 341.285-287.577l393.066-1015.698c1.977-5.11 1.383-10.885-1.75-15.417-3.113-4.498-8.137-7.21-13.633-7.21h-235.865c-7.068 0-13.389 4.497-15.697 11.13l-241.621 690.164-264.652-690.619c-2.414-6.423-8.609-10.676-15.469-10.676h-387.101l.052-.051zM7813.738 2493.221h-226.572c-9.153 0-16.607 7.454-16.607 16.607v988.485c0 9.152 7.454 16.607 16.607 16.607h226.572c9.135 0 16.607-7.455 16.607-16.607v-988.416a16.57 16.57 0 0 0-16.626-16.607l.019-.069zM7701.738 2043.139c-89.757 0-162.592 72.659-162.592 162.417 0 89.81 72.853 162.558 162.593 162.558 89.723 0 162.486-72.748 162.486-162.558 0-89.74-72.799-162.417-162.398-162.417h-.089zM9686.585 2811.037c-89.67 0-159.441-72.013-159.441-159.46s70.682-160.282 160.281-160.282c89.672 0 159.443 71.995 159.443 159.372 0 87.448-70.701 160.37-160.299 160.37h.016zm.875-303.887c-81.672 0-143.465 64.925-143.465 144.427 0 79.468 61.355 143.518 142.643 143.518 81.654 0 143.518-64.872 143.518-144.428 0-79.467-61.426-143.517-142.625-143.517h-.071zm35.352 159.914l45.098 63.141h-38.027l-40.602-57.925h-34.91v57.925h-31.832v-167.37h74.637c38.885 0 64.453 19.897 64.453 53.393.174 27.44-15.75 44.205-38.676 50.837h-.141zm-26.95-75.511h-41.512v52.938h41.512c20.719 0 33.09-10.133 33.09-26.495 0-17.22-12.424-26.442-33.074-26.442h-.016z"
                          />
                        </svg>
                      </span>
                    </div>
                    <Speaker
                      className="text-[#2EBD59] animate-wobble "
                      size={22}
                    />
                  </div>
                </Link>
              </div>
              {/* Buy me a coffe */}
              <div>
                <div className="  bg-[#ffdd00] m-1 rounded-md ">
                  <Link href="https://www.buymeacoffee.com/iamjulius">
                    <div
                      id="BuyMeACoffe"
                      className="flex justify-between cursor-pointer  p-2"
                    >
                      <span>
                        <svg
                          className="w-28 h-6"
                          width="4169"
                          height="913"
                          viewBox="0 0 4169 913"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M564.724 212.38L564.098 212.012L562.648 211.569C563.232 212.062 563.962 212.347 564.724 212.38V212.38Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M573.852 277.606L573.152 277.802L573.852 277.606Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M564.992 212.279C564.903 212.268 564.815 212.247 564.731 212.217C564.726 212.275 564.726 212.333 564.731 212.391C564.827 212.379 564.917 212.34 564.992 212.279V212.279Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M564.727 212.388H564.821V212.33L564.727 212.388Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M573.292 277.488L574.348 276.886L574.741 276.665L575.098 276.284C574.428 276.573 573.816 276.981 573.292 277.488V277.488Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M566.552 213.805L565.52 212.823L564.82 212.442C565.196 213.106 565.818 213.595 566.552 213.805V213.805Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M306.964 846.743C306.14 847.099 305.418 847.657 304.864 848.364L305.515 847.946C305.957 847.541 306.583 847.062 306.964 846.743Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M457.704 817.085C457.704 816.151 457.25 816.323 457.361 819.64C457.361 819.369 457.471 819.099 457.52 818.841C457.582 818.252 457.631 817.674 457.704 817.085Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M442.069 846.743C441.245 847.099 440.523 847.657 439.969 848.364L440.62 847.946C441.062 847.541 441.688 847.062 442.069 846.743Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M200.806 853.794C200.18 853.25 199.414 852.892 198.595 852.762C199.258 853.082 199.921 853.401 200.363 853.647L200.806 853.794Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M176.918 830.918C176.821 829.95 176.524 829.014 176.046 828.167C176.385 829.049 176.668 829.951 176.894 830.869L176.918 830.918Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M337.376 421.762C304.582 435.801 267.365 451.719 219.132 451.719C198.954 451.679 178.874 448.91 159.438 443.49L192.798 785.991C193.978 800.306 200.5 813.654 211.067 823.384C221.634 833.114 235.474 838.513 249.838 838.511C249.838 838.511 297.139 840.968 312.922 840.968C329.909 840.968 380.845 838.511 380.845 838.511C395.207 838.51 409.044 833.109 419.608 823.38C430.173 813.65 436.692 800.304 437.873 785.991L473.603 407.514C457.636 402.06 441.521 398.437 423.355 398.437C391.936 398.424 366.621 409.246 337.376 421.762Z"
                            fill="#FFDD00"
                          />
                          <path
                            d="M56.1709 275.636L56.7359 276.165L57.1044 276.386C56.8206 276.104 56.5077 275.852 56.1709 275.636V275.636Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M627.869 244.025L622.846 218.686C618.338 195.951 608.107 174.469 584.77 166.251C577.289 163.623 568.802 162.493 563.066 157.052C557.33 151.611 555.635 143.16 554.309 135.324C551.852 120.941 549.543 106.546 547.025 92.1872C544.851 79.8431 543.131 65.9761 537.469 54.6515C530.1 39.4456 514.808 30.553 499.602 24.6696C491.81 21.7609 483.858 19.3004 475.786 17.3C437.796 7.27737 397.852 3.59259 358.769 1.49226C311.858 -1.09629 264.822 -0.316398 218.022 3.82595C183.189 6.99487 146.501 10.8271 113.399 22.8763C101.301 27.2858 88.8338 32.5796 79.6341 41.9267C68.3464 53.4109 64.6616 71.1716 72.9033 85.4931C78.7621 95.6632 88.6864 102.848 99.2126 107.602C112.923 113.727 127.242 118.387 141.932 121.506C182.833 130.546 225.196 134.096 266.981 135.606C313.294 137.475 359.682 135.961 405.775 131.074C417.173 129.821 428.551 128.319 439.908 126.566C453.284 124.515 461.87 107.025 457.927 94.8402C453.21 80.273 440.535 74.623 426.201 76.8216C424.088 77.1532 421.988 77.4603 419.875 77.7674L418.352 77.9885C413.496 78.6026 408.641 79.1758 403.785 79.708C393.754 80.7889 383.699 81.6733 373.619 82.3611C351.043 83.9333 328.406 84.6579 305.782 84.6948C283.55 84.6948 261.307 84.0683 239.124 82.6067C229.003 81.9435 218.907 81.1 208.835 80.0765C204.254 79.5975 199.685 79.0939 195.115 78.5289L190.767 77.9762L189.822 77.8411L185.314 77.1901C176.102 75.8022 166.89 74.2054 157.776 72.2771C156.857 72.073 156.034 71.5613 155.444 70.8266C154.855 70.0919 154.533 69.1781 154.533 68.2361C154.533 67.294 154.855 66.3802 155.444 65.6455C156.034 64.9107 156.857 64.3991 157.776 64.1951H157.948C165.846 62.5123 173.805 61.0753 181.789 59.8225C184.45 59.4048 187.119 58.9954 189.797 58.5942H189.871C194.87 58.2626 199.893 57.3659 204.868 56.7763C248.148 52.2745 291.685 50.7397 335.174 52.1827C356.288 52.7968 377.39 54.0373 398.405 56.1745C402.925 56.6413 407.421 57.1326 411.916 57.6853C413.636 57.8941 415.367 58.1397 417.099 58.3485L420.588 58.8521C430.758 60.367 440.874 62.2053 450.938 64.367C465.849 67.6097 484.998 68.6659 491.63 85.0018C493.743 90.1851 494.701 95.9457 495.868 101.387L497.354 108.327C497.393 108.451 497.422 108.578 497.44 108.707C500.953 125.084 504.47 141.461 507.991 157.838C508.249 159.048 508.255 160.298 508.009 161.51C507.762 162.722 507.269 163.871 506.559 164.884C505.849 165.897 504.938 166.753 503.882 167.398C502.827 168.043 501.65 168.464 500.425 168.634H500.326L498.177 168.929L496.052 169.212C489.321 170.088 482.582 170.907 475.835 171.668C462.545 173.183 449.235 174.493 435.904 175.599C409.415 177.801 382.872 179.246 356.276 179.934C342.724 180.295 329.176 180.462 315.633 180.438C261.724 180.395 207.862 177.262 154.312 171.054C148.515 170.366 142.718 169.629 136.92 168.88C141.416 169.457 133.653 168.438 132.081 168.217C128.396 167.701 124.711 167.164 121.027 166.608C108.658 164.753 96.3631 162.468 84.019 160.466C69.0956 158.01 54.8232 159.238 41.3246 166.608C30.2443 172.671 21.2763 181.969 15.6171 193.261C9.7951 205.298 8.06326 218.403 5.45934 231.337C2.85542 244.271 -1.19786 258.187 0.337468 271.464C3.6415 300.12 23.6745 323.408 52.4895 328.616C79.5973 333.529 106.852 337.508 134.181 340.898C241.535 354.046 349.991 355.619 457.681 345.59C466.451 344.771 475.208 343.879 483.954 342.913C486.685 342.612 489.449 342.927 492.043 343.834C494.637 344.74 496.996 346.215 498.946 348.151C500.896 350.087 502.389 352.435 503.314 355.022C504.239 357.61 504.574 360.372 504.294 363.105L501.567 389.611C496.073 443.172 490.578 496.728 485.084 550.28C479.352 606.518 473.583 662.752 467.777 718.982C466.14 734.818 464.502 750.651 462.864 766.479C461.292 782.066 461.071 798.144 458.111 813.546C453.444 837.767 437.046 852.642 413.12 858.083C391.2 863.071 368.807 865.69 346.327 865.895C321.405 866.03 296.496 864.924 271.575 865.059C244.971 865.207 212.385 862.75 191.848 842.951C173.805 825.558 171.312 798.328 168.855 774.782C165.58 743.609 162.333 712.439 159.115 681.274L141.06 507.979L129.379 395.851C129.182 393.996 128.986 392.166 128.802 390.299C127.401 376.923 117.931 363.83 103.008 364.505C90.2341 365.07 75.716 375.928 77.2145 390.299L85.8737 473.428L103.782 645.385C108.883 694.228 113.972 743.081 119.049 791.941C120.032 801.3 120.953 810.684 121.985 820.043C127.598 871.188 166.657 898.751 215.026 906.513C243.276 911.058 272.213 911.991 300.881 912.458C337.631 913.048 374.749 914.46 410.897 907.803C464.461 897.977 504.65 862.21 510.386 806.729C512.024 790.713 513.661 774.692 515.299 758.667C520.744 705.672 526.181 652.672 531.61 599.669L549.371 426.483L557.514 347.113C557.92 343.178 559.582 339.477 562.254 336.559C564.927 333.642 568.467 331.662 572.352 330.912C587.668 327.928 602.309 322.83 613.204 311.174C630.547 292.615 633.998 268.418 627.869 244.025ZM51.7034 261.147C51.9368 261.036 51.5069 263.039 51.3227 263.972C51.2858 262.56 51.3595 261.307 51.7034 261.147ZM53.1897 272.644C53.3125 272.558 53.6809 273.049 54.0617 273.638C53.4844 273.098 53.116 272.693 53.1774 272.644H53.1897ZM54.6513 274.572C55.1794 275.469 55.4619 276.034 54.6513 274.572V274.572ZM57.5868 276.955H57.6605C57.6605 277.041 57.7956 277.127 57.8447 277.213C57.7633 277.118 57.6728 277.032 57.5746 276.955H57.5868ZM571.639 273.393C566.137 278.625 557.846 281.057 549.653 282.273C457.779 295.907 364.567 302.81 271.685 299.764C205.212 297.491 139.438 290.109 73.6279 280.812C67.1795 279.903 60.1907 278.723 55.7567 273.97C47.4045 265.004 51.5069 246.948 53.6809 236.115C55.6707 226.191 59.4783 212.962 71.2819 211.55C89.7059 209.388 111.102 217.163 129.33 219.927C151.275 223.276 173.301 225.957 195.41 227.972C289.765 236.569 385.705 235.231 479.642 222.653C496.764 220.352 513.825 217.679 530.824 214.633C545.969 211.918 562.759 206.821 571.91 222.506C578.186 233.192 579.021 247.489 578.051 259.563C577.752 264.823 575.454 269.771 571.627 273.393H571.639Z"
                            fill="#0D0C22"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1128.89 528.658C1123.53 538.898 1116.15 547.814 1106.77 555.381C1097.38 562.953 1086.43 569.118 1073.91 573.865C1061.4 578.623 1048.8 581.815 1036.14 583.443C1023.47 585.076 1011.17 584.935 999.256 582.996C987.335 581.069 977.194 577.136 968.858 571.192L978.249 473.648C986.887 470.681 997.758 467.635 1010.88 464.516C1023.99 461.403 1037.47 459.171 1051.33 457.837C1065.19 456.498 1078.3 456.656 1090.68 458.283C1103.03 459.916 1112.8 463.849 1119.95 470.088C1123.82 473.648 1127.11 477.507 1129.79 481.666C1132.47 485.825 1134.11 490.131 1134.71 494.584C1136.19 507.055 1134.26 518.413 1128.89 528.658ZM992.546 320.873C998.808 317.014 1006.33 313.595 1015.12 310.623C1023.91 307.662 1032.93 305.576 1042.17 304.39C1051.4 303.209 1060.42 303.051 1069.22 303.943C1078 304.836 1085.76 307.283 1092.46 311.289C1099.17 315.301 1104.16 321.094 1107.43 328.66C1110.71 336.238 1111.61 345.816 1110.12 357.394C1108.93 366.599 1105.27 374.397 1099.17 380.777C1093.06 387.168 1085.6 392.508 1076.82 396.814C1068.02 401.126 1058.71 404.539 1048.88 407.053C1039.04 409.585 1029.57 411.444 1020.49 412.625C1011.4 413.817 1003.5 414.563 996.8 414.851C990.091 415.151 985.69 415.298 983.609 415.298L992.546 320.873ZM1177.17 465.629C1172.4 455.243 1166 446.112 1157.95 438.234C1149.91 430.369 1140.36 424.656 1129.34 421.09C1134.11 417.23 1138.8 411.145 1143.42 402.827C1148.04 394.52 1151.99 385.456 1155.27 375.658C1158.54 365.853 1160.78 355.987 1161.97 346.036C1163.16 336.091 1162.71 327.552 1160.64 320.421C1155.56 302.61 1147.59 288.652 1136.71 278.554C1125.83 268.462 1113.17 261.483 1098.72 257.618C1084.26 253.77 1068.32 252.945 1050.89 255.171C1033.45 257.398 1015.64 261.777 997.469 268.31C997.469 266.829 997.617 265.269 997.917 263.636C998.206 262.009 998.359 260.297 998.359 258.511C998.359 254.058 996.125 250.204 991.656 246.933C987.187 243.666 982.043 241.74 976.236 241.141C970.423 240.553 964.757 241.807 959.245 244.927C953.727 248.046 949.927 253.77 947.846 262.071C945.458 288.799 943.076 316.567 940.694 345.364C938.307 374.171 935.777 403.273 933.095 432.674C930.412 462.069 927.73 491.244 925.047 520.193C922.365 549.148 919.682 576.984 917 603.706C917.896 611.725 920.131 617.963 923.709 622.416C927.282 626.875 931.456 629.548 936.225 630.435C940.989 631.328 945.986 630.502 951.198 627.982C956.409 625.468 960.958 621.077 964.837 614.844C976.752 621.376 990.165 625.609 1005.07 627.541C1019.97 629.468 1035.09 629.468 1050.44 627.541C1065.78 625.609 1080.91 621.975 1095.81 616.624C1110.71 611.284 1124.27 604.599 1136.49 596.586C1148.71 588.568 1158.99 579.431 1167.34 569.191C1175.68 558.941 1181.19 547.882 1183.88 536.01C1186.56 523.833 1187.3 511.661 1186.11 499.483C1184.92 487.312 1181.94 476.033 1177.17 465.629Z"
                            fill="#0D0C23"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1613.27 700.802C1611.63 710.601 1609.31 720.919 1606.34 731.763C1603.35 742.595 1599.85 752.473 1595.83 761.384C1591.81 770.29 1587.34 777.483 1582.43 782.982C1577.5 788.474 1572.21 790.78 1566.55 789.892C1562.08 789.288 1559.25 786.468 1558.06 781.428C1556.87 776.37 1556.87 770.137 1558.06 762.718C1559.25 755.293 1561.56 746.901 1564.99 737.549C1568.41 728.197 1572.59 718.913 1577.5 709.713C1582.43 700.503 1588.01 691.676 1594.27 683.211C1600.53 674.752 1607.08 667.694 1613.94 662.055C1615.43 663.835 1616.1 668.287 1615.95 675.419C1615.79 682.544 1614.9 691.009 1613.27 700.802ZM1764.81 507.494C1760.79 503.041 1755.87 500.521 1750.06 499.922C1744.25 499.329 1738.36 502.595 1732.4 509.721C1728.52 516.846 1723.61 523.678 1717.65 530.21C1711.68 536.748 1705.5 542.682 1699.09 548.027C1692.69 553.367 1686.58 557.978 1680.77 561.832C1674.96 565.697 1670.41 568.517 1667.13 570.297C1665.94 560.798 1665.27 550.553 1665.12 539.562C1664.96 528.577 1665.19 517.445 1665.79 506.161C1666.68 490.124 1668.54 473.946 1671.38 457.609C1674.21 441.278 1678.31 425.241 1683.67 409.498C1683.67 401.192 1681.73 394.433 1677.86 389.235C1673.98 384.041 1669.29 380.77 1663.78 379.436C1658.26 378.102 1652.61 378.843 1646.79 381.662C1640.98 384.488 1635.99 389.613 1631.82 397.027C1628.24 406.831 1624.14 417.816 1619.53 429.988C1614.9 442.165 1609.69 454.563 1603.88 467.182C1598.07 479.811 1591.58 492.056 1584.43 503.929C1577.28 515.812 1569.46 526.357 1560.96 535.556C1552.47 544.761 1543.23 551.966 1533.25 557.159C1523.26 562.358 1512.47 564.658 1500.84 564.064C1495.47 562.578 1491.6 558.572 1489.21 552.034C1486.83 545.507 1485.41 537.336 1484.97 527.538C1484.52 517.739 1484.97 506.974 1486.31 495.243C1487.65 483.518 1489.44 471.86 1491.67 460.282C1493.91 448.698 1496.37 437.713 1499.05 427.321C1501.73 416.929 1504.26 408.165 1506.65 401.039C1510.23 392.433 1510.23 385.222 1506.65 379.436C1503.07 373.644 1498.16 369.79 1491.9 367.852C1485.64 365.925 1479.08 366.004 1472.23 368.078C1465.37 370.157 1460.45 374.757 1457.48 381.883C1452.41 394.066 1447.79 407.718 1443.62 422.862C1439.44 438.007 1436.09 453.676 1433.56 469.854C1431.02 486.044 1429.6 502.081 1429.31 517.965C1429.29 518.999 1429.34 519.982 1429.34 521.011C1422.84 538.274 1416.64 551.322 1410.76 560.052C1403.16 571.343 1394.59 576.242 1385.06 574.75C1380.88 572.97 1378.13 568.817 1376.79 562.279C1375.44 555.752 1374.99 547.734 1375.44 538.223C1375.9 528.73 1377.01 517.965 1378.79 505.935C1380.59 493.91 1382.82 481.438 1385.5 468.521C1388.19 455.597 1391.02 442.618 1393.99 429.547C1396.97 416.483 1399.65 404.158 1402.05 392.574C1401.75 382.182 1398.69 374.243 1392.88 368.745C1387.07 363.258 1378.94 361.105 1368.52 362.286C1361.37 365.258 1356.07 369.123 1352.64 373.87C1349.21 378.617 1346.46 384.708 1344.38 392.128C1343.18 395.993 1341.39 403.712 1339.01 415.296C1336.62 426.869 1333.57 440.165 1329.85 455.157C1326.12 470.159 1321.73 485.818 1316.66 502.149C1311.59 518.479 1305.93 533.262 1299.68 546.468C1293.41 559.679 1286.56 570.297 1279.11 578.316C1271.66 586.328 1263.61 589.6 1254.97 588.114C1250.2 587.221 1247.15 582.322 1245.81 573.416C1244.47 564.505 1244.24 553.526 1245.14 540.455C1246.03 527.391 1247.82 513.06 1250.5 497.475C1253.18 481.885 1255.93 467.114 1258.77 453.151C1261.6 439.199 1264.21 426.869 1266.6 416.183C1268.98 405.492 1270.62 398.366 1271.51 394.806C1271.51 386.194 1269.57 379.295 1265.7 374.09C1261.82 368.903 1257.13 365.631 1251.62 364.292C1246.1 362.958 1240.44 363.699 1234.63 366.518C1228.82 369.344 1223.83 374.469 1219.65 381.883C1218.16 389.901 1216.22 399.186 1213.84 409.724C1211.45 420.263 1209.15 431.101 1206.92 442.239C1204.68 453.377 1202.59 464.288 1200.66 474.98C1198.72 485.671 1197.3 495.023 1196.41 503.041C1195.81 509.274 1195.14 516.925 1194.4 525.978C1193.65 535.042 1193.28 544.614 1193.28 554.707C1193.28 564.81 1194.02 574.829 1195.52 584.774C1197 594.725 1199.69 603.857 1203.56 612.164C1207.43 620.482 1212.87 627.308 1219.88 632.654C1226.88 637.999 1235.75 640.966 1246.48 641.565C1257.5 642.153 1267.11 641.344 1275.31 639.112C1283.51 636.886 1290.95 633.394 1297.66 628.642C1304.37 623.9 1310.47 618.255 1315.99 611.717C1321.5 605.191 1326.94 598.065 1332.31 590.34C1337.37 601.631 1343.93 610.384 1351.98 616.622C1360.02 622.855 1368.52 626.573 1377.46 627.754C1386.39 628.935 1395.49 627.687 1404.73 623.968C1413.96 620.261 1422.3 613.949 1429.76 605.038C1434.67 599.574 1439.3 593.364 1443.64 586.498C1445.48 589.713 1447.44 592.816 1449.65 595.68C1456.96 605.191 1466.87 611.717 1479.39 615.283C1492.79 618.849 1505.9 619.448 1518.72 617.069C1531.53 614.695 1543.75 610.384 1555.37 604.151C1567 597.913 1577.8 590.42 1587.79 581.655C1597.77 572.896 1606.48 563.77 1613.94 554.26C1613.63 561.092 1613.49 567.556 1613.49 573.637C1613.49 579.728 1613.34 586.328 1613.04 593.46C1598.14 603.857 1584.06 616.328 1570.8 630.874C1557.53 645.419 1545.91 660.936 1535.93 677.419C1525.95 693.897 1518.12 710.601 1512.47 727.525C1506.8 744.46 1504.04 760.265 1504.19 774.969C1504.34 789.666 1507.84 802.505 1514.69 813.49C1521.55 824.481 1532.72 832.347 1548.22 837.099C1564.32 842.151 1578.47 842.292 1590.69 837.546C1602.91 832.793 1613.56 824.922 1622.65 813.937C1631.74 802.951 1639.19 789.666 1645.01 774.076C1650.82 758.485 1655.44 742.228 1658.86 725.304C1662.29 708.38 1664.45 691.738 1665.34 675.419C1666.24 659.082 1666.24 644.526 1665.34 631.761C1690.97 621.075 1711.98 607.564 1728.37 591.228C1744.76 574.908 1758.32 557.679 1769.05 539.562C1772.33 535.11 1773.45 529.764 1772.41 523.531C1771.36 517.293 1768.83 511.947 1764.81 507.494Z"
                            fill="#0D0C23"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2328.72 478.992C2329.61 472.166 2330.95 464.961 2332.74 457.389C2334.52 449.817 2336.76 442.466 2339.45 435.34C2342.12 428.214 2345.25 422.055 2348.83 416.856C2352.41 411.663 2356.21 407.951 2360.23 405.719C2364.26 403.498 2368.35 403.718 2372.53 406.385C2377 409.064 2379.75 414.703 2380.8 423.309C2381.83 431.933 2380.8 441.132 2377.67 450.93C2374.53 460.735 2368.95 469.934 2360.9 478.546C2352.86 487.163 2341.98 492.797 2328.27 495.47C2327.67 491.322 2327.82 485.824 2328.72 478.992ZM2483.61 497.25C2478.69 495.775 2474 495.623 2469.53 496.809C2465.06 497.996 2462.22 501.115 2461.04 506.167C2458.64 515.666 2454.85 525.391 2449.63 535.336C2444.42 545.287 2438.01 554.713 2430.42 563.624C2422.82 572.53 2414.24 580.401 2404.71 587.227C2395.17 594.059 2385.19 598.959 2374.76 601.925C2364.32 605.197 2355.68 605.564 2348.83 603.038C2341.98 600.524 2336.54 596.212 2332.52 590.126C2328.5 584.04 2325.59 576.689 2323.8 568.077C2322.01 559.465 2320.96 550.56 2320.67 541.349C2337.65 542.541 2352.78 539.501 2366.05 532.217C2379.3 524.95 2390.55 515.293 2399.79 503.268C2409.03 491.243 2416.03 477.732 2420.8 462.735C2425.56 447.743 2428.25 432.82 2428.85 417.969C2429.14 404.012 2427.06 392.213 2422.59 382.562C2418.12 372.916 2412.08 365.406 2404.48 360.066C2396.89 354.72 2388.17 351.601 2378.33 350.714C2368.51 349.821 2358.51 351.16 2348.38 354.72C2336.16 358.879 2325.81 365.632 2317.32 374.99C2308.82 384.342 2301.74 395.185 2296.08 407.504C2290.42 419.829 2285.95 433.114 2282.67 447.365C2279.39 461.622 2277.01 475.653 2275.52 489.463C2274.18 501.855 2273.46 513.705 2273.21 525.142C2272.57 526.595 2271.95 527.99 2271.27 529.544C2266.65 540.094 2261.28 550.413 2255.18 560.505C2249.07 570.603 2242.29 579.068 2234.84 585.894C2227.39 592.726 2219.64 595.099 2211.59 593.02C2206.83 591.839 2204.22 586.335 2203.77 576.542C2203.33 566.738 2203.84 554.566 2205.33 540.015C2206.83 525.47 2208.54 509.721 2210.48 492.797C2212.41 475.873 2213.38 459.695 2213.38 444.251C2213.38 430.887 2210.85 418.049 2205.78 405.719C2200.71 393.405 2193.78 383.155 2185 374.99C2176.2 366.818 2166 361.399 2154.38 358.732C2142.75 356.054 2130.24 357.839 2116.83 364.072C2103.41 370.311 2092.76 379.069 2084.87 390.354C2076.96 401.644 2069.73 413.517 2063.18 425.988C2060.79 416.483 2057.3 407.657 2052.68 399.486C2048.05 391.32 2042.4 384.195 2035.69 378.103C2028.98 372.023 2021.45 367.271 2013.12 363.852C2004.77 360.444 1995.97 358.732 1986.74 358.732C1977.8 358.732 1969.53 360.444 1961.93 363.852C1954.33 367.271 1947.4 371.644 1941.14 376.99C1934.88 382.341 1929.22 388.348 1924.15 395.033C1919.09 401.712 1914.61 408.324 1910.75 414.85C1910.14 407.131 1909.47 400.379 1908.73 394.581C1907.99 388.794 1906.64 383.895 1904.71 379.889C1902.77 375.877 1900.02 372.837 1896.44 370.757C1892.86 368.683 1887.8 367.638 1881.25 367.638C1877.96 367.638 1874.68 368.305 1871.41 369.638C1868.12 370.977 1865.21 372.837 1862.69 375.21C1860.15 377.595 1858.22 380.482 1856.88 383.895C1855.53 387.308 1855.17 391.247 1855.76 395.7C1856.05 398.971 1856.88 402.899 1858.22 407.504C1859.56 412.11 1860.82 418.128 1862.02 425.541C1863.21 432.967 1864.18 441.951 1864.92 452.49C1865.67 463.034 1865.89 475.952 1865.59 491.243C1865.29 506.54 1864.18 524.425 1862.24 544.914C1860.3 565.404 1857.24 589.16 1853.08 616.177C1852.48 622.415 1854.86 627.467 1860.23 631.326C1865.59 635.18 1871.7 637.406 1878.56 638.005C1885.41 638.599 1891.9 637.406 1898 634.445C1904.11 631.468 1907.62 626.274 1908.51 618.855C1909.4 604.898 1911.12 590.053 1913.65 574.31C1916.18 558.578 1919.31 542.987 1923.04 527.544C1926.76 512.106 1931 497.408 1935.78 483.445C1940.54 469.488 1945.84 457.169 1951.65 446.478C1957.46 435.786 1963.5 427.254 1969.75 420.868C1976.01 414.483 1982.56 411.29 1989.42 411.29C1997.77 411.29 2004.24 415.071 2008.87 422.643C2013.48 430.22 2016.76 439.951 2018.7 451.818C2020.64 463.701 2021.53 476.698 2021.39 490.797C2021.23 504.901 2020.64 518.486 2019.6 531.55C2018.55 544.621 2017.36 556.272 2016.02 566.517C2014.68 576.762 2013.71 583.82 2013.12 587.674C2013.12 594.506 2015.72 599.919 2020.93 603.931C2026.15 607.938 2031.96 610.317 2038.37 611.057C2044.78 611.803 2050.81 610.61 2056.48 607.491C2062.14 604.372 2065.41 599.111 2066.31 591.68C2069.29 570.303 2073.39 548.853 2078.6 527.323C2083.81 505.794 2089.78 486.497 2096.49 469.42C2103.19 452.343 2110.64 438.386 2118.84 427.548C2127.03 416.715 2135.75 411.29 2144.99 411.29C2149.75 411.29 2153.41 414.562 2155.94 421.089C2158.47 427.621 2159.74 436.527 2159.74 447.811C2159.74 456.129 2159.07 464.668 2157.73 473.426C2156.39 482.185 2154.83 491.243 2153.03 500.595C2151.25 509.953 2149.68 519.525 2148.34 529.324C2147 539.128 2146.33 549.367 2146.33 560.058C2146.33 567.484 2147.07 576.095 2148.56 585.894C2150.05 595.687 2152.88 604.977 2157.05 613.73C2161.23 622.494 2166.96 629.914 2174.27 635.999C2181.57 642.085 2190.88 645.131 2202.2 645.131C2219.19 645.131 2234.24 641.492 2247.36 634.219C2260.47 626.947 2271.72 617.448 2281.11 605.717C2281.59 605.101 2282.04 604.445 2282.51 603.835C2283.23 605.57 2283.87 607.406 2284.68 609.057C2291.09 622.121 2299.81 632.213 2310.84 639.345C2321.85 646.47 2334.82 650.403 2349.73 651.149C2364.63 651.884 2380.86 649.138 2398.46 642.905C2411.56 638.152 2422.96 632.213 2432.65 625.088C2442.33 617.962 2451.05 609.277 2458.8 599.032C2466.55 588.787 2473.62 576.983 2480.04 563.624C2486.45 550.254 2492.92 534.969 2499.48 517.74C2500.67 512.999 2499.55 508.766 2496.13 505.048C2492.7 501.341 2488.53 498.742 2483.61 497.25Z"
                            fill="#0D0C23"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2726.57 447.574C2725.07 456.338 2723.06 465.995 2720.53 476.528C2717.99 487.073 2714.79 497.984 2710.92 509.269C2707.04 520.554 2702.28 530.725 2696.62 539.778C2690.95 548.841 2684.47 556.035 2677.17 561.381C2669.86 566.726 2661.45 568.953 2651.91 568.06C2647.14 567.472 2643.49 564.206 2640.96 558.261C2638.42 552.328 2637.08 544.75 2636.93 535.545C2636.78 526.346 2637.6 516.248 2639.39 505.257C2641.18 494.277 2643.94 483.507 2647.67 472.963C2651.39 462.43 2655.94 452.699 2661.29 443.788C2666.66 434.882 2672.84 427.977 2679.85 423.078C2686.85 418.178 2694.53 415.884 2702.87 416.172C2711.21 416.472 2720.15 420.625 2729.7 428.644C2729.09 432.509 2728.06 438.821 2726.57 447.574ZM2885.48 481.648C2880.86 479.275 2876.09 478.76 2871.18 480.094C2866.26 481.428 2862.75 485.96 2860.67 493.678C2859.48 501.996 2856.8 511.789 2852.63 523.074C2848.45 534.359 2843.31 545.055 2837.21 555.142C2831.09 565.24 2824.09 573.631 2816.19 580.311C2808.29 586.996 2799.88 590.041 2790.94 589.437C2783.48 588.849 2778.26 585.063 2775.29 578.084C2772.3 571.106 2770.74 562.353 2770.6 551.802C2770.44 541.269 2771.49 529.391 2773.72 516.174C2775.96 502.963 2778.64 489.825 2781.77 476.749C2784.9 463.69 2788.1 451.139 2791.39 439.114C2794.66 427.09 2797.34 416.918 2799.43 408.606C2801.82 401.181 2801.07 394.874 2797.19 389.67C2793.32 384.483 2788.48 380.764 2782.67 378.538C2776.85 376.312 2770.97 375.718 2765 376.758C2759.04 377.798 2755.18 380.99 2753.38 386.33C2735.8 371.186 2718.89 363.021 2702.65 361.834C2686.4 360.648 2671.42 364.213 2657.72 372.526C2644.01 380.838 2631.87 392.863 2621.29 408.606C2610.71 424.349 2602.14 441.493 2595.58 460.051C2589.03 478.608 2584.93 497.544 2583.29 516.841C2581.65 536.144 2582.91 553.741 2587.09 569.625C2591.27 585.509 2598.63 598.506 2609.22 608.593C2619.79 618.691 2634.18 623.743 2652.36 623.743C2660.4 623.743 2668.15 622.11 2675.6 618.843C2683.05 615.572 2689.91 611.712 2696.17 607.259C2702.42 602.807 2707.94 598.128 2712.71 593.228C2717.47 588.329 2721.2 584.249 2723.88 580.978C2725.96 591.669 2729.4 600.733 2734.16 608.152C2738.93 615.572 2744.37 621.669 2750.48 626.41C2756.58 631.157 2763 634.649 2769.7 636.881C2776.41 639.107 2782.89 640.22 2789.15 640.22C2803.16 640.22 2816.26 635.468 2828.49 625.963C2840.7 616.47 2851.66 604.807 2861.35 591.002C2871.03 577.191 2879 562.646 2885.26 547.35C2891.52 532.059 2895.69 518.474 2897.77 506.591C2899.86 502.138 2899.49 497.465 2896.66 492.565C2893.82 487.666 2890.1 484.033 2885.48 481.648Z"
                            fill="#0D0C23"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3690.14 727.546C3687.61 737.639 3683.66 746.183 3678.3 753.156C3672.94 760.135 3666.23 763.774 3658.18 764.073C3653.12 764.367 3649.24 761.694 3646.56 756.055C3643.88 750.41 3642.02 743.137 3640.97 734.231C3639.92 725.32 3639.48 715.369 3639.63 704.384C3639.78 693.399 3640.23 682.561 3640.97 671.869C3641.71 661.184 3642.61 651.227 3643.66 642.027C3644.69 632.817 3645.51 625.702 3646.11 620.651C3656.24 621.837 3664.67 626.211 3671.37 633.789C3678.08 641.361 3683.21 650.34 3686.79 660.737C3690.37 671.129 3692.45 682.34 3693.05 694.365C3693.64 706.39 3692.67 717.449 3690.14 727.546ZM3528.32 727.546C3525.79 737.639 3521.84 746.183 3516.47 753.156C3511.11 760.135 3504.41 763.774 3496.36 764.073C3491.29 764.367 3487.42 761.694 3484.74 756.055C3482.05 750.41 3480.19 743.137 3479.15 734.231C3478.1 725.32 3477.65 715.369 3477.81 704.384C3477.95 693.399 3478.4 682.561 3479.15 671.869C3479.89 661.184 3480.78 651.227 3481.83 642.027C3482.87 632.817 3483.69 625.702 3484.29 620.651C3494.42 621.837 3502.85 626.211 3509.54 633.789C3516.25 641.361 3521.39 650.34 3524.97 660.737C3528.55 671.129 3530.63 682.34 3531.23 694.365C3531.82 706.39 3530.85 717.449 3528.32 727.546ZM3362.26 474.555C3361.95 481.675 3361.28 487.987 3360.24 493.48C3359.19 498.983 3357.78 502.464 3355.99 503.95C3352.71 502.165 3348.68 497.571 3343.92 490.14C3339.15 482.72 3335.43 474.323 3332.74 464.971C3330.07 455.619 3329.24 446.42 3330.29 437.356C3331.32 428.303 3336.03 421.257 3344.37 416.199C3347.64 414.419 3350.47 415.086 3352.86 418.205C3355.25 421.325 3357.18 425.851 3358.68 431.79C3360.16 437.734 3361.2 444.561 3361.8 452.28C3362.4 460.004 3362.54 467.424 3362.26 474.555ZM3322.69 563.414C3318.07 568.307 3312.92 572.54 3307.27 576.105C3301.6 579.671 3295.79 582.344 3289.83 584.124C3283.87 585.909 3278.5 586.35 3273.74 585.457C3260.33 582.79 3250.04 576.993 3242.9 568.087C3235.74 559.181 3231.19 548.716 3229.26 536.691C3227.32 524.661 3227.54 511.816 3229.93 498.158C3232.31 484.5 3236.33 471.809 3242 460.078C3247.66 448.347 3254.52 438.249 3262.56 429.789C3270.61 421.325 3279.39 416.058 3288.94 413.973C3285.36 429.117 3284.17 444.787 3285.36 460.965C3286.55 477.149 3290.43 492.366 3296.99 506.618C3301.15 515.241 3306.15 523.101 3311.96 530.227C3317.77 537.358 3324.85 543.444 3333.2 548.49C3330.81 553.542 3327.3 558.514 3322.69 563.414ZM3817.33 479.008C3818.22 472.182 3819.56 464.971 3821.35 457.399C3823.13 449.833 3825.37 442.481 3828.05 435.355C3830.73 428.224 3833.86 422.065 3837.44 416.872C3841.02 411.679 3844.82 407.96 3848.84 405.734C3852.86 403.508 3856.96 403.728 3861.13 406.401C3865.6 409.079 3868.36 414.719 3869.4 423.325C3870.44 431.942 3869.4 441.142 3866.27 450.946C3863.14 460.744 3857.56 469.95 3849.51 478.556C3841.47 487.179 3830.59 492.813 3816.88 495.486C3816.28 491.332 3816.43 485.84 3817.33 479.008ZM3997.48 479.008C3998.37 472.182 3999.71 464.971 4001.5 457.399C4003.29 449.833 4005.53 442.481 4008.21 435.355C4010.89 428.224 4014.02 422.065 4017.59 416.872C4021.17 411.679 4024.97 407.96 4028.99 405.734C4033.02 403.508 4037.12 403.728 4041.29 406.401C4045.76 409.079 4048.51 414.719 4049.56 423.325C4050.6 431.942 4049.56 441.142 4046.43 450.946C4043.3 460.744 4037.71 469.95 4029.66 478.556C4021.62 487.179 4010.74 492.813 3997.03 495.486C3996.44 491.332 3996.58 485.84 3997.48 479.008ZM4164.89 505.064C4161.46 501.357 4157.29 498.757 4152.38 497.266C4147.46 495.785 4142.77 495.638 4138.29 496.825C4133.82 498.011 4130.99 501.131 4129.8 506.177C4127.41 515.681 4123.61 525.406 4118.4 535.346C4113.18 545.303 4106.78 554.728 4099.18 563.634C4091.58 572.54 4083.01 580.417 4073.48 587.243C4063.93 594.075 4053.95 598.974 4043.53 601.935C4033.09 605.213 4024.45 605.58 4017.59 603.054C4010.74 600.534 4005.3 596.228 4001.28 590.142C3997.26 584.05 3994.35 576.704 3992.56 568.087C3990.78 559.481 3989.73 550.575 3989.43 541.364C4006.42 542.557 4021.55 539.516 4034.81 532.233C4048.06 524.96 4059.32 515.303 4068.56 503.278C4077.79 491.259 4084.8 477.748 4089.57 462.751C4094.33 447.753 4097.01 432.835 4097.62 417.985C4097.9 404.028 4095.82 392.223 4091.35 382.571C4086.89 372.926 4080.85 365.421 4073.25 360.081C4065.65 354.73 4056.94 351.616 4047.1 350.724C4037.27 349.831 4027.28 351.176 4017.15 354.73C4004.93 358.895 3994.58 365.647 3986.09 374.999C3977.59 384.357 3970.51 395.201 3964.85 407.514C3959.18 419.844 3954.71 433.123 3951.43 447.38C3948.15 461.632 3945.77 475.668 3944.29 489.473C3942.84 502.871 3942.05 515.693 3941.87 527.966C3940.74 530.413 3939.54 532.871 3938.24 535.346C3933.03 545.303 3926.62 554.728 3919.02 563.634C3911.43 572.54 3902.85 580.417 3893.32 587.243C3883.78 594.075 3873.8 598.974 3863.37 601.935C3852.93 605.213 3844.29 605.58 3837.44 603.054C3830.59 600.534 3825.15 596.228 3821.13 590.142C3817.11 584.05 3814.2 576.704 3812.41 568.087C3810.62 559.481 3809.57 550.575 3809.28 541.364C3826.26 542.557 3841.39 539.516 3854.65 532.233C3867.91 524.96 3879.16 515.303 3888.4 503.278C3897.64 491.259 3904.64 477.748 3909.41 462.751C3914.17 447.753 3916.86 432.835 3917.46 417.985C3917.75 404.028 3915.67 392.223 3911.2 382.571C3906.73 372.926 3900.69 365.421 3893.09 360.081C3885.49 354.73 3876.78 351.616 3866.94 350.724C3857.11 349.831 3847.12 351.176 3836.99 354.73C3824.77 358.895 3814.42 365.647 3805.93 374.999C3797.43 384.357 3790.35 395.201 3784.69 407.514C3779.03 419.844 3774.56 433.123 3771.28 447.38C3768 461.632 3765.62 475.668 3764.13 489.473C3763.29 497.26 3762.72 504.809 3762.3 512.223C3759.42 514.664 3756.62 517.122 3753.62 519.535C3743.35 527.853 3732.54 535.346 3721.22 542.031C3709.88 548.716 3698.11 554.209 3685.9 558.514C3673.67 562.82 3661.16 565.42 3648.35 566.307L3676.07 270.55C3677.85 264.312 3676.96 258.825 3673.39 254.073C3669.81 249.32 3665.18 246.054 3659.52 244.274C3653.86 242.488 3647.82 242.641 3641.42 244.715C3635.01 246.8 3629.72 251.552 3625.55 258.966C3623.46 270.256 3621.3 285.694 3619.07 305.291C3616.83 324.888 3614.6 346.271 3612.36 369.433C3610.13 392.596 3607.89 416.499 3605.66 441.142C3603.42 465.796 3601.48 488.806 3599.85 510.183C3599.77 511.133 3599.71 511.991 3599.64 512.93C3597.03 515.133 3594.5 517.354 3591.8 519.535C3581.52 527.853 3570.71 535.346 3559.39 542.031C3548.06 548.716 3536.29 554.209 3524.08 558.514C3511.85 562.82 3499.33 565.42 3486.52 566.307L3514.24 270.55C3516.03 264.312 3515.14 258.825 3511.56 254.073C3507.98 249.32 3503.36 246.054 3497.7 244.274C3492.04 242.488 3486 242.641 3479.59 244.715C3473.18 246.8 3467.9 251.552 3463.73 258.966C3461.64 270.256 3459.48 285.694 3457.25 305.291C3455.01 324.888 3452.77 346.271 3450.54 369.433C3448.3 392.596 3446.07 416.499 3443.83 441.142C3441.6 465.796 3439.66 488.806 3438.02 510.183C3437.99 510.613 3437.96 511.003 3437.93 511.432C3433.24 513.596 3428.14 515.495 3422.6 517.089C3416.93 518.727 3410.53 519.694 3403.38 519.987C3404.57 514.636 3405.53 508.697 3406.28 502.165C3407.02 495.638 3407.63 488.806 3408.07 481.675C3408.52 474.555 3408.66 467.424 3408.52 460.298C3408.36 453.167 3407.99 446.64 3407.4 440.695C3405.91 427.936 3403.16 415.832 3399.14 404.395C3395.11 392.969 3389.67 383.396 3382.82 375.666C3375.96 367.947 3367.39 362.749 3357.11 360.081C3346.83 357.409 3334.83 358.296 3321.13 362.749C3300.85 360.081 3282.6 361.94 3266.36 368.32C3250.12 374.711 3236.04 383.984 3224.12 396.156C3212.2 408.339 3202.44 422.658 3194.84 439.142C3187.24 455.619 3182.17 472.549 3179.64 489.914C3178.56 497.277 3178.04 504.606 3177.88 511.918C3173.27 521.332 3168.22 529.56 3162.65 536.465C3154.76 546.264 3146.56 554.282 3138.07 560.515C3129.57 566.753 3121.15 571.506 3112.81 574.772C3104.46 578.044 3097.01 580.27 3090.46 581.451C3082.71 582.937 3075.26 583.09 3068.11 581.897C3060.96 580.716 3054.39 577.298 3048.44 571.653C3043.67 567.499 3040.02 560.814 3037.49 551.609C3034.95 542.404 3033.47 531.944 3033.02 520.208C3032.57 508.477 3033.02 496.226 3034.36 483.461C3035.7 470.696 3038 458.592 3041.29 447.16C3044.56 435.728 3048.73 425.484 3053.8 416.42C3058.86 407.373 3064.82 400.908 3071.68 397.049C3075.55 397.648 3077.95 399.942 3078.84 403.948C3079.73 407.96 3079.95 412.713 3079.51 418.205C3079.06 423.704 3078.39 429.343 3077.5 435.129C3076.6 440.922 3076.15 445.753 3076.15 449.607C3077.65 457.625 3080.55 463.864 3084.87 468.317C3089.19 472.769 3094.04 475.374 3099.4 476.109C3104.76 476.855 3110.05 475.595 3115.27 472.323C3120.48 469.062 3124.73 463.864 3128.01 456.732C3128.31 457.032 3128.75 457.179 3129.35 457.179L3135.61 400.614C3137.4 392.89 3136.2 386.064 3132.03 380.125C3127.86 374.186 3122.35 370.767 3115.49 369.88C3106.85 357.409 3095.15 350.803 3080.4 350.057C3065.65 349.317 3050.52 354.142 3035.03 364.534C3025.49 371.372 3017.07 380.791 3009.77 392.816C3002.46 404.847 2996.51 418.205 2991.89 432.903C2987.26 447.601 2983.99 463.123 2982.06 479.454C2980.12 495.785 2979.74 511.675 2980.93 527.107C2982.12 542.557 2984.89 557.107 2989.21 570.76C2993.52 584.423 2999.56 595.855 3007.32 605.054C3013.87 613.073 3021.31 618.944 3029.66 622.657C3038 626.369 3046.72 628.663 3055.81 629.556C3064.9 630.443 3073.92 630.07 3082.86 628.443C3091.8 626.816 3100.3 624.516 3108.34 621.538C3118.77 617.684 3129.5 612.779 3140.53 606.84C3151.55 600.907 3162.13 593.775 3172.27 585.457C3177.59 581.084 3182.73 576.314 3187.69 571.2C3189.95 576.783 3192.47 582.186 3195.51 587.243C3203.56 600.602 3214.43 611.445 3228.14 619.758C3241.84 628.07 3258.69 632.071 3278.66 631.783C3300.12 631.483 3319.93 626.07 3338.11 615.525C3356.29 604.992 3371.19 589.464 3382.82 568.98C3400.23 568.98 3417.35 566.12 3434.19 560.441C3434.05 562.238 3433.91 564.131 3433.78 565.866C3432.59 581.604 3431.98 592.289 3431.98 597.934C3431.69 607.733 3431.03 619.831 3429.98 634.229C3428.93 648.633 3428.26 663.777 3427.97 679.662C3427.67 695.546 3428.26 711.583 3429.75 727.773C3431.25 743.951 3434.37 758.654 3439.14 771.871C3443.9 785.077 3450.68 796.288 3459.48 805.499C3468.27 814.699 3479.82 820.197 3494.13 821.977C3509.32 824.051 3522.43 821.378 3533.46 813.958C3544.48 806.533 3553.43 796.367 3560.29 783.45C3567.14 770.526 3571.98 755.608 3574.81 738.684C3577.64 721.76 3578.46 704.757 3577.27 687.68C3576.08 670.604 3572.95 654.499 3567.88 639.36C3562.81 624.211 3555.81 611.739 3546.87 601.935C3552.24 600.46 3558.64 597.641 3566.1 593.476C3573.54 589.323 3581.22 584.644 3589.12 579.445C3591.06 578.168 3592.97 576.823 3594.91 575.512C3594.18 586.034 3593.81 593.538 3593.81 597.934C3593.52 607.733 3592.85 619.831 3591.8 634.229C3590.76 648.633 3590.09 663.777 3589.79 679.662C3589.5 695.546 3590.09 711.583 3591.58 727.773C3593.07 743.951 3596.2 758.654 3600.96 771.871C3605.73 785.077 3612.51 796.288 3621.3 805.499C3630.09 814.699 3641.64 820.197 3655.95 821.977C3671.14 824.051 3684.26 821.378 3695.29 813.958C3706.31 806.533 3715.25 796.367 3722.11 783.45C3728.96 770.526 3733.8 755.608 3736.64 738.684C3739.47 721.76 3740.28 704.757 3739.1 687.68C3737.9 670.604 3734.77 654.499 3729.71 639.36C3724.64 624.211 3717.64 611.739 3708.69 601.935C3714.06 600.46 3720.47 597.641 3727.92 593.476C3735.37 589.323 3743.04 584.644 3750.94 579.445C3755.05 576.744 3759.13 573.958 3763.19 571.093C3764.73 585.616 3768.03 598.353 3773.29 609.066C3779.7 622.137 3788.41 632.229 3799.44 639.36C3810.46 646.48 3823.43 650.419 3838.34 651.159C3853.24 651.894 3869.47 649.153 3887.07 642.915C3900.17 638.168 3911.57 632.229 3921.26 625.103C3930.94 617.972 3939.66 609.287 3947.41 599.048C3947.86 598.454 3948.28 597.81 3948.72 597.211C3950.1 601.37 3951.63 605.365 3953.45 609.066C3959.86 622.137 3968.57 632.229 3979.6 639.36C3990.62 646.48 4003.59 650.419 4018.49 651.159C4033.39 651.894 4049.63 649.153 4067.22 642.915C4080.33 638.168 4091.73 632.229 4101.42 625.103C4111.1 617.972 4119.81 609.287 4127.57 599.048C4135.31 588.797 4142.38 576.993 4148.8 563.634C4155.21 550.27 4161.68 534.985 4168.25 517.755C4169.44 513.009 4168.31 508.776 4164.89 505.064Z"
                            fill="#0D0C23"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="w-6 h-6 animate-wiggle"
                          width="884"
                          height="1279"
                          viewBox="0 0 884 1279"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518V297.518Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M803.896 388.891L802.916 389.166L803.896 388.891Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377V297.377Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M791.113 297.529H791.244V297.447L791.113 297.529Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.04C804.702 387.444 803.846 388.016 803.111 388.726V388.726Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515V299.515Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M641.187 1144.63C641.187 1143.33 640.551 1143.57 640.705 1148.21C640.705 1147.84 640.86 1147.46 640.929 1147.1C641.015 1146.27 641.084 1145.46 641.187 1144.63Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1163.94L247.841 1164.01Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M472.623 590.836C426.682 610.503 374.546 632.802 306.976 632.802C278.71 632.746 250.58 628.868 223.353 621.274L270.086 1101.08C271.74 1121.13 280.876 1139.83 295.679 1153.46C310.482 1167.09 329.87 1174.65 349.992 1174.65C349.992 1174.65 416.254 1178.09 438.365 1178.09C462.161 1178.09 533.516 1174.65 533.516 1174.65C553.636 1174.65 573.019 1167.08 587.819 1153.45C602.619 1139.82 611.752 1121.13 613.406 1101.08L663.459 570.876C641.091 563.237 618.516 558.161 593.068 558.161C549.054 558.144 513.591 573.303 472.623 590.836Z"
                            fill="#FFDD00"
                          />
                          <path
                            d="M78.6885 386.132L79.4799 386.872L79.9962 387.182C79.5987 386.787 79.1603 386.435 78.6885 386.132V386.132Z"
                            fill="#0D0C22"
                          />
                          <path
                            d="M879.567 341.849L872.53 306.352C866.215 274.503 851.882 244.409 819.19 232.898C808.711 229.215 796.821 227.633 788.786 220.01C780.751 212.388 778.376 200.55 776.518 189.572C773.076 169.423 769.842 149.257 766.314 129.143C763.269 111.85 760.86 92.4243 752.928 76.56C742.604 55.2584 721.182 42.8009 699.88 34.559C688.965 30.4844 677.826 27.0375 666.517 24.2352C613.297 10.1947 557.342 5.03277 502.591 2.09047C436.875 -1.53577 370.983 -0.443234 305.422 5.35968C256.625 9.79894 205.229 15.1674 158.858 32.0469C141.91 38.224 124.445 45.6399 111.558 58.7341C95.7448 74.8221 90.5829 99.7026 102.128 119.765C110.336 134.012 124.239 144.078 138.985 150.737C158.192 159.317 178.251 165.846 198.829 170.215C256.126 182.879 315.471 187.851 374.007 189.968C438.887 192.586 503.87 190.464 568.44 183.618C584.408 181.863 600.347 179.758 616.257 177.304C634.995 174.43 647.022 149.928 641.499 132.859C634.891 112.453 617.134 104.538 597.055 107.618C594.095 108.082 591.153 108.512 588.193 108.942L586.06 109.252C579.257 110.113 572.455 110.915 565.653 111.661C551.601 113.175 537.515 114.414 523.394 115.378C491.768 117.58 460.057 118.595 428.363 118.647C397.219 118.647 366.058 117.769 334.983 115.722C320.805 114.793 306.661 113.611 292.552 112.177C286.134 111.506 279.733 110.801 273.333 110.009L267.241 109.235L265.917 109.046L259.602 108.134C246.697 106.189 233.792 103.953 221.025 101.251C219.737 100.965 218.584 100.249 217.758 99.2193C216.932 98.1901 216.482 96.9099 216.482 95.5903C216.482 94.2706 216.932 92.9904 217.758 91.9612C218.584 90.9319 219.737 90.2152 221.025 89.9293H221.266C232.33 87.5721 243.479 85.5589 254.663 83.8038C258.392 83.2188 262.131 82.6453 265.882 82.0832H265.985C272.988 81.6186 280.026 80.3625 286.994 79.5366C347.624 73.2302 408.614 71.0801 469.538 73.1014C499.115 73.9618 528.676 75.6996 558.116 78.6935C564.448 79.3474 570.746 80.0357 577.043 80.8099C579.452 81.1025 581.878 81.4465 584.305 81.7391L589.191 82.4445C603.438 84.5667 617.61 87.1419 631.708 90.1703C652.597 94.7128 679.422 96.1925 688.713 119.077C691.673 126.338 693.015 134.408 694.649 142.03L696.731 151.752C696.786 151.926 696.826 152.105 696.852 152.285C701.773 175.227 706.7 198.169 711.632 221.111C711.994 222.806 712.002 224.557 711.657 226.255C711.312 227.954 710.621 229.562 709.626 230.982C708.632 232.401 707.355 233.6 705.877 234.504C704.398 235.408 702.75 235.997 701.033 236.236H700.895L697.884 236.649L694.908 237.044C685.478 238.272 676.038 239.419 666.586 240.486C647.968 242.608 629.322 244.443 610.648 245.992C573.539 249.077 536.356 251.102 499.098 252.066C480.114 252.57 461.135 252.806 442.162 252.771C366.643 252.712 291.189 248.322 216.173 239.625C208.051 238.662 199.93 237.629 191.808 236.58C198.106 237.389 187.231 235.96 185.029 235.651C179.867 234.928 174.705 234.177 169.543 233.397C152.216 230.798 134.993 227.598 117.7 224.793C96.7944 221.352 76.8005 223.073 57.8906 233.397C42.3685 241.891 29.8055 254.916 21.8776 270.735C13.7217 287.597 11.2956 305.956 7.64786 324.075C4.00009 342.193 -1.67805 361.688 0.472751 380.288C5.10128 420.431 33.165 453.054 73.5313 460.35C111.506 467.232 149.687 472.807 187.971 477.556C338.361 495.975 490.294 498.178 641.155 484.129C653.44 482.982 665.708 481.732 677.959 480.378C681.786 479.958 685.658 480.398 689.292 481.668C692.926 482.938 696.23 485.005 698.962 487.717C701.694 490.429 703.784 493.718 705.08 497.342C706.377 500.967 706.846 504.836 706.453 508.665L702.633 545.797C694.936 620.828 687.239 695.854 679.542 770.874C671.513 849.657 663.431 928.434 655.298 1007.2C653.004 1029.39 650.71 1051.57 648.416 1073.74C646.213 1095.58 645.904 1118.1 641.757 1139.68C635.218 1173.61 612.248 1194.45 578.73 1202.07C548.022 1209.06 516.652 1212.73 485.161 1213.01C450.249 1213.2 415.355 1211.65 380.443 1211.84C343.173 1212.05 297.525 1208.61 268.756 1180.87C243.479 1156.51 239.986 1118.36 236.545 1085.37C231.957 1041.7 227.409 998.039 222.9 954.381L197.607 711.615L181.244 554.538C180.968 551.94 180.693 549.376 180.435 546.76C178.473 528.023 165.207 509.681 144.301 510.627C126.407 511.418 106.069 526.629 108.168 546.76L120.298 663.214L145.385 904.104C152.532 972.528 159.661 1040.96 166.773 1109.41C168.15 1122.52 169.44 1135.67 170.885 1148.78C178.749 1220.43 233.465 1259.04 301.224 1269.91C340.799 1276.28 381.337 1277.59 421.497 1278.24C472.979 1279.07 524.977 1281.05 575.615 1271.72C650.653 1257.95 706.952 1207.85 714.987 1130.13C717.282 1107.69 719.576 1085.25 721.87 1062.8C729.498 988.559 737.115 914.313 744.72 840.061L769.601 597.451L781.009 486.263C781.577 480.749 783.905 475.565 787.649 471.478C791.392 467.391 796.352 464.617 801.794 463.567C823.25 459.386 843.761 452.245 859.023 435.916C883.318 409.918 888.153 376.021 879.567 341.849ZM72.4301 365.835C72.757 365.68 72.1548 368.484 71.8967 369.792C71.8451 367.813 71.9483 366.058 72.4301 365.835ZM74.5121 381.94C74.6842 381.819 75.2003 382.508 75.7337 383.334C74.925 382.576 74.4089 382.009 74.4949 381.94H74.5121ZM76.5597 384.641C77.2996 385.897 77.6953 386.689 76.5597 384.641V384.641ZM80.672 387.979H80.7752C80.7752 388.1 80.9645 388.22 81.0333 388.341C80.9192 388.208 80.7925 388.087 80.6548 387.979H80.672ZM800.796 382.989C793.088 390.319 781.473 393.726 769.996 395.43C641.292 414.529 510.713 424.199 380.597 419.932C287.476 416.749 195.336 406.407 103.144 393.382C94.1102 392.109 84.3197 390.457 78.1082 383.798C66.4078 371.237 72.1548 345.944 75.2003 330.768C77.9878 316.865 83.3218 298.334 99.8572 296.355C125.667 293.327 155.64 304.218 181.175 308.09C211.917 312.781 242.774 316.538 273.745 319.36C405.925 331.405 540.325 329.529 671.92 311.91C695.905 308.686 719.805 304.941 743.619 300.674C764.835 296.871 788.356 289.731 801.175 311.703C809.967 326.673 811.137 346.701 809.778 363.615C809.359 370.984 806.139 377.915 800.779 382.989H800.796Z"
                            fill="#0D0C22"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
