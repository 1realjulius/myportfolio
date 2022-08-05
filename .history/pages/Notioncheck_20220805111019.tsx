import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Clock } from 'react-feather'

export default function Notioncheck() {
  return (
    <div className=' bg-[#f7f2f2]  font-cadizMedium md:font-ApercuMedium min-h-screen'>
      <div className='px-4 py-4'>
        {/* nav and header */}
        <div>
          {/* navbar */}
          <div>
            <Link href="/" className='cursor-pointer'>
              <span className='text-base cursor-pointer'>iamjulius</span>
            </Link>
          </div>
          {/* header */}
          <div className='flex'>
            <div>
              <div className='space-y-2'>
                <span className='py-1 px-2 bg-blue-400 text-xs rounded-md'>Notion Templates and Checklists </span>
                <h1 className='text-xl items-start relative flex flex-col'>
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
            <div></div>
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

