import React from "react";
import Link from "next/link";
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
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-green-800/40"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="text-green-600">Lets work together, Hire Me Now!👌</span>
            </span>            
          </div>
          <p className="text-sm font-cadizMedium text-gray-400">
            I am familiar with systems like Git, Expo, Web 3 development,
            Webflow and Figma. I am dedicated to driving{" "}
            <span className="text-black dark:text-white"> innovation</span> with
            the ability to follow industry and technological trends and
            facilitating the early adoption of{" "}
            <span className="text-black dark:text-white"> innovations.</span>
          </p>
        </div>
        <div className="border-2 dark:border-[#24292f] divide-y-2 dark:divide-[#24292f] rounded-lg">
          <div className=" p-2">
            <Link
              href="/Assets/files/Julius_Eghan-Cover-letter.pdf"
              download="Julius_Eghan-Cover-Letter.pdf"
              target="_blank"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-base dark:text-white">Get My Cover Letter</p>
                <FileText
                  className="text-black cursor-pointer dark:text-white"
                  size={18}
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link
              href="/Assets/files/Julius_Eghan-Resume.pdf"
              download="Julius_Eghan-Resume.pdf"
              target="_blank"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-base dark:text-white">Download My Resume</p>
                <Download
                  className="text-black cursor-pointer dark:text-white animate-bounce"
                  size={18}
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-base dark:text-white">
                  Check Out My LinkedIn Profile
                </p>
                <Linkedin className="text-black  dark:text-white" size={18} />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Hey, I want you to Join Our Team 🎉">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-base dark:text-white">Send Me An Email</p>
                <Mail className="text-black  dark:text-white" size={18} />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="tel:+233549321512">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-base text-green-600">Call Me Now...</p>
                <Phone className="text-green-600 animate-wobble" size={18} />
              </div>
            </Link>
          </div>
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