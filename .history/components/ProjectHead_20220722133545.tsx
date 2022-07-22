import React from 'react'
import Image from 'next/image'
import { ChevronLeft, Twitter,} from 'react-feather'

export const ProjectHead = () => {
  return (
    <div className='flex  w-fit mx-4 md:flex-row  items-center justify-center space-x-2 border-2 p-2'>

        <div className='flex-2'>
            <p className='ml-2 text-sm text-gray-400'>Project Details</p>
            <div className='border-2 divide-y-2 rounded-lg'>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p className='text-sm md:text-base mr-4'>Project Name</p>
                    <p className='text-sm md:text-base ml-4'>Notioncheck</p>
                </div>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p className='text-sm md:text-base mr-4'>Project Type</p>
                    <p className='text-sm md:text-base ml-4'>Templates Store</p>
                </div>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p className='text-sm md:text-base mr-4'>Project Link</p>
                    <p className='text-sm md:text-base ml-4'>Notioncheck</p>
                </div>
            </div>
        </div>
    </div>
  )
}
