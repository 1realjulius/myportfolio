import React from 'react'
import Image from 'next/image'
import { ChevronLeft, Twitter,} from 'react-feather'

export const ProjectHead = () => {
  return (
    <div className='mx-4 flex items-center justify-center space-x-2'>
        <div className='border-2 rounded-lg'>
          <Image src="/Assets/notioncheck-dark.png" width="200%" height='200%' alt="" className='rounded-lg' />
        </div>
        <div className=''>
            <p className='ml-2 text-sm text-gray-400'>Project Details</p>
            <div className='border-2 divide-y-2 rounded-lg'>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p className='mr-4'>Project Name</p>
                    <p className='ml-4'>Notioncheck</p>
                </div>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p className='mr-4'>Project Type</p>
                    <p className='ml-4'>Templates Store</p>
                </div>
                <div className='flex items-center justify-between py-1 px-2'>
                    <p className='mr-4'>Project Link</p>
                    <p className='ml-4'>Notioncheck</p>
                </div>
            </div>
        </div>
    </div>
  )
}
