import React from 'react'
import Link from 'next/link'
import { Copy, Linkedin, X,} from 'react-feather'

const HireMe = () => {
  return (
    <div className='p-4 font-cadizMedium'>
        <div>
            <div className='px-2 pb-1'>
                <p className='text-base font-cadizMedium'>Hire Me, Add me to your team.</p>
            </div>
            <div className='border-2  divide-y-2 rounded-lg'>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base'>Download Resume</p>
                    <p className='text-base'>Download Resume</p>
                </div>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base'>Check Out LinkedIn Profile</p>
                    <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                      <button>
                        <Linkedin className='text-black dark:text-white' size={25} />
                      </button>
                    </Link>
                </div>
            </div>
            <div className='px-2'>
                <p className='text-sm text-gray-400'>A short description on my emplyment</p>
            </div>
        </div>
    </div>
  )
}

export default HireMe