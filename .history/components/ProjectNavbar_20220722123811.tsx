import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, Twitter,} from 'react-feather'

export const ProjectNavbar = () => {
  return (
    <div className='mx-4 my-4'>
        <div className='flex items-center space-x-2'>
           <ChevronLeft className='text-black cursor-pointer' size={18} />
           <Link href="/">
             <span className='leading-none'>iamjulius</span>
           </Link>
        </div>
        <div>
            <div>
                <Image src="/Assets/notioncheck-full-logo.svg" width="100%" height='40' alt="" className='' />
            </div>
            <div>
              <Link href="https://twitter.com/iamjulius_e">
                <button className='animate-bounce'>
                  <Twitter className='text-black dark:text-white hover:text-[#1DA1F2]' size={25} />
                </button>
               </Link>
              </div>
        </div>
    </div>
  )
}
