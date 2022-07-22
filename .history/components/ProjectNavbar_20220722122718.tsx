import React from 'react'
import Link from 'next/link'
import { ChevronLeft,} from 'react-feather'

export const ProjectNavbar = () => {
  return (
    <div>
        <div className='flex'>
           <ChevronLeft className='text-black cursor-pointer' size={18} />
           <Link href="/">
             <a>iamjulius</a>
           </Link>
        </div>
        <div></div>
    </div>
  )
}
