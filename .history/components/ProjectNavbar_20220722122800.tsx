import React from 'react'
import Link from 'next/link'
import { ChevronLeft,} from 'react-feather'

export const ProjectNavbar = () => {
  return (
    <div className='mx-4 my-4'>
        <div className='flex items-center space-x-2'>
           <ChevronLeft className='text-black cursor-pointer' size={18} />
           <Link href="/">
             <a className='leading-none'>iamjulius</a>
           </Link>
        </div>
        <div></div>
    </div>
  )
}
