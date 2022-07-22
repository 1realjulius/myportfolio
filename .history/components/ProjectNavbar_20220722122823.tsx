import React from 'react'
import Link from 'next/link'
import { ChevronLeft,} from 'react-feather'

export const ProjectNavbar = () => {
  return (
    <div className='mx-4 my-4'>
        <div className='flex items-center space-x-2'>
           <ChevronLeft className='text-black cursor-pointer' size={18} />
           <Link href="/">
             <span className='leading-none'>iamjulius</span>
           </Link>
        </div>
        <div></div>
    </div>
  )
}
