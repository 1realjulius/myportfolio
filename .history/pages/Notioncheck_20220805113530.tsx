import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Clock } from 'react-feather'

export default function Notioncheck() {
  return (
    <div className=' bg-[#f7f2f2]  font-cadizMedium md:font-ApercuMedium min-h-screen'>
      <div className='px-8 md:px-6 py-4'>
        {/* nav and header */}
        <div>
          {/* navbar */}
          <div>
            <Link href="/" className='cursor-pointer'>
              <span className='text-base cursor-pointer'>iamjulius</span>
            </Link>
          </div>
          {/* header */}
          <div className='flex flex-col md:flex-row space-y-2'>
            <div>
              <div className=''>
                <span className='py-1 px-2 my-2 bg-blue-300 text-xs rounded-md'>Notion Templates and Checklists </span>
                <h1 className='text-xl mb-2 items-start relative flex flex-col'>
                  <span className=' font-ApercuBold'>Notioncheck</span>                  
                  <Image src="/Assets/underline-black.svg" width={110} height={10} alt="" className='absolute bottom-0 text-black' />
                </h1>
                <p className='text-sm'>Simplify your workflows with my Functional, comprehensive, and beginner-friendly notion checklists.</p>
              </div>
              <div className='flex flex-row items-center'>
                <div className='mx-1'><Image src="/Assets/notion-logo-1.svg" width={30} height={30} alt="" className='' /></div>
                <div className='mx-1'><Image src="/Assets/gumroad-logo.png" width={74} height={42} alt="" className='mx-2' /></div>
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <Link href="/">
                  <div  className='cursor-pointer border px-3 py-1 rounded-md border-gray-300'>
                    <span className='text-base cursor-pointer '>iamjulius</span>
                  </div>
                </Link>
              </div>
            </div>
            <div>
            <Image src="/Assets/notioncheck-header-img.png" width={74} height={74} alt="" className='mx-2' />
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto max-w-container px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
              <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col lg:pb-6">
                  <h1 className="flex flex-col items-start mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem]">
                    <span className=' font-ApercuBold'>Notioncheck</span>                  
                    <Image src="/Assets/underline-black.svg" width={200} height={20} alt="" className='absolute bottom-0 text-black' />
                  </h1>
                  <p className="order-first text-base leading-7 text-sky-500">Notion Templates and Checklists</p>
                  <p className="mt-6 text-base leading-7 text-slate-700">Simplify your workflows with my Functional, comprehensive, and beginner-friendly notion checklists.</p>
                  <div className="flex flex-wrap mt-6">
                    <div className="flex items-center text-sm font-medium text-slate-500">
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-slate-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)"></ellipse>
                        <ellipse rx="13" ry="5" transform="matrix(-.5 .86603 .86603 .5 16 16)"></ellipse>
                        <circle cx="16" cy="16" r="2"></circle>
                      </svg>
                      <span className="ml-2.5">React</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                      <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 flex-none stroke-slate-400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <defs>
                          <linearGradient id="next-icon-gradient" x1="14.875" y1="18" x2="24" y2="27.125" gradientUnits="userSpaceOnUse">
                            <stop offset=".24" stopColor="#94A3B8"></stop>
                            <stop offset="1" stopColor="#94A3B8" stopOpacity="0"></stop>
                          </linearGradient>
                        </defs>
                        <circle cx="16" cy="16" r="12.25" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                        <path d="M11.75 21.25v-9.5L24 26" stroke="url(#next-icon-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M21 11.75a.75.75 0 0 0-1.5 0v4.172l1.5 1.64V11.75Z" fill="#94A3B8" strokeWidth="0"></path>
                      </svg>
                      <span className="ml-2.5">Next.js</span>
                    </div>
                  </div>
                <div className="mt-10 flex gap-4">
                  <a href="https://transmit.tailwindui.com" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" target="_blank" rel="noreferrer">
                    <span>
                      <span className="inline-flex items-center">
                        <span>Live preview</span>
                        <svg viewBox="0 0 20 20" className="ml-1.5 h-5 w-5 fill-slate-400" fillRule="evenodd" clipRule="evenodd">
                          <path d="M7 3.25H3.25v13.5h13.5V13h-1.5v2.25H4.75V4.75H7v-1.5Zm9.75 0H10v1.5h4.19l-5.72 5.72 1.06 1.06 5.72-5.72V10h1.5V3.25Z"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                  <a href="#pricing" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 ">
                    <span>Get this template 
                      <span aria-hidden="true" className="text-black/25">→</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative lg:col-span-2">
                <Image src="/Assets/notioncheck-header-img.png" width="1300" height="1300" className="relative z-20 -mb-36 aspect-[800/640] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16" alt=''/>
                <div className="z-0 hidden md:block">
                  <div className="absolute -top-4 -right-12 -left-12 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -top-12 bottom-0 -left-4 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -top-12 bottom-0 -right-4 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,white_4rem,white_calc(100%-4rem),transparent)]"></div>
                  <div className="absolute -top-12 right-10 mt-px flex h-8 items-end overflow-hidden">
                    <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 -left-48 flex h-8 items-end overflow-hidden">
                    <div className="flex -mb-px h-[2px] w-80 -scale-x-100">
                      <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* whats included section */}
        <div></div>
        {/* Screenshots */}
        <div></div>
        {/* Others and testimonials */}
        <div></div>
      </div>
    </div>
  );
}

