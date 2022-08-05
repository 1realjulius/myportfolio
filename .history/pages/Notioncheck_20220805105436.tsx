import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Clock } from 'react-feather'

export default function Notioncheck() {
  return (
    <div className=' bg-[#f7f2f2] dark:bg-[#090c10] dark:text-white font-cadizMedium md:font-ApercuMedium min-h-screen'>
      <div className='px-4 py-4'>
        {/* nav and header */}
        <div>
          {/* navbar */}
          <div>
            <Link href="/" className='cursor-pointer'>
              <span className='text-base cursor-pointer dark:text-white'>iamjulius</span>
            </Link>
          </div>
          {/* header */}
          <div className='flex'>
            <div>
              <div>
                <h1 className='text-xl items-start relative flex flex-col'>
                  <span className=''>Notioncheck</span>                  
                  <Image src="/Assets/underline.svg" width={100} height={10} alt="" className='absolute bottom-0' />
                </h1>
                <p className='text-sm'>Simplify your workflows with my Functional, comprehensive, and beginner-friendly notion checklists.</p>
              </div>
              <div>
                <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="" className='' />
                <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="" className='' />
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <Link href="/">
                  <div  className='cursor-pointer border px-3 py-1 rounded-md border-gray-300'>
                    <span className='text-base cursor-pointer dark:text-white'>iamjulius</span>
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

