import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Twitter,} from 'react-feather'

export const ProjectNavbar = () => {
  return (
    <div className='mx-4 my-4'>
        <div>
           <Link href="/">
            <div className='flex items-center space-x-2 '>
                <div className='flex'>
                  <ChevronLeft className='text-black cursor-pointer leading-none' size={18} />
                  <span className='text-sm'>Back</span>
                </div>
                <span className=' bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-purple-400'>iamjulius</span>
            </div>
           </Link>
        </div>
        <div className='flex items-center justify-between my-2'>
            <div>
                <Image src="/Assets/notioncheck-full-logo.svg" width="100%" height='40' alt="" className='' />
            </div>
            <div>
              <Link href="https://twitter.com/iamjulius_e">
                <button className='animate-bounce'>
                  <Twitter className='text-black  hover:text-[#1DA1F2]' size={25} />
                </button>
               </Link>
              </div>
        </div>
    </div>
  )
}
