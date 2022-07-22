import React from 'react'
import Image from 'next/image'
import { ChevronLeft, Twitter,} from 'react-feather'

export const ProjectHead = () => {
  return (
    <div>
        <div>
          <Image src="/Assets/notioncheck-dark.png" width="100%" height='100%' alt="" className='' />
        </div>
        <div>
            <div className='border-2 divide-y-2 rounded-lg'>
                <div className='flex items-center justify-between'>
                    <p>Project Neme</p>
                    <p>Notioncheck</p>
                </div>
            </div>
        </div>
    </div>
  )
}
