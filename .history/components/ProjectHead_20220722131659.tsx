import React from 'react'
import Image from 'next/image'
import { ChevronLeft, Twitter,} from 'react-feather'

export const ProjectHead = () => {
  return (
    <div className='mx-4 md:flex items-center  space-x-2'>
        <div className='flex-1 border-2 rounded-lg'>
          <Image src="/Assets/notioncheck-dark-lg.png" width="400%" height='400%' alt="" className='rounded-lg' />
        </div>
        <div className='flex-1'>
            <p className='ml-2 text-sm text-gray-400'>Project Details</p>
            <div className='border-2 divide-y-2 rounded-lg'>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p>Project Name</p>
                    <p>Notioncheck</p>
                </div>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p>Project Type</p>
                    <p>Templates Store</p>
                </div>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p>Project Link</p>
                    <p>Notioncheck</p>
                </div>
            </div>
        </div>
    </div>
  )
}
