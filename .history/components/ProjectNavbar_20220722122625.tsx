import React from 'react'
import Link from 'next/link'
import { ChevronLeft,} from 'react-feather'

export const ProjectNavbar = () => {
  return (
    <div>
        <div>
        <ChevronLeft className='text-black cursor-pointer' size={18} />
        </div>
        <div></div>
    </div>
  )
}
