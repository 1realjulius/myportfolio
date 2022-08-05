import React from 'react'
import Link from 'next/link';
import { Clock } from 'react-feather'

export default function Notioncheck() {
  return (
    <div className=' bg-[#f7f2f2] dark:bg-[#090c10]  font-cadizMedium md:font-ApercuMedium min-h-screen'>
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
                <span>Notioncheck</span>
                <h1>Simplify your workflows with my Functional, comprehensive, and beginner-friendly notion checklists.</h1>
              </div>
              <div></div>
              <div></div>
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

