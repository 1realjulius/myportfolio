import React from 'react'
import Link from 'next/link';
import { Clock } from 'react-feather'

export default function Notioncheck() {
  return (
    <div className=' bg-[#f7f2f2] dark:bg-[#090c10]  font-cadizMedium md:font-ApercuMedium min-h-screen'>
      <div className='flex items-center justify-center space-x-2'>
        <Clock className='text-gray-400' size={35} />
        <span className='text-xl font-cadizMedium text-gray-400'>Page coming Soon</span>
      </div>
    </div>
  );
}

