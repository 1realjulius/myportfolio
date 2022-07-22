import React from 'react'
import Image from 'next/image'
import { ChevronLeft, Twitter,} from 'react-feather'

export const ProjectHead = () => {
  return (
    <div className='mx-4 flex-col md:flex-row'>
        <div className='flex-1'>
          <Image src="/Assets/notioncheck-dark.png" width="100%" height='100%' alt="" className='' />
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
