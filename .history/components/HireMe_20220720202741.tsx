import React from 'react'
import Link from 'next/link'
import { FileText, Linkedin} from 'react-feather'

const HireMe = () => {
  return (
    <div className='p-4 font-cadizMedium'>
        <div>
            <div className='px-2 pb-1'>
                <p className='text-base font-cadizMedium dark:text-white'>Hire Me, Add me to your team.</p>
            </div>
            <div className='border-2 dark:border-[#24292f] divide-y-2 dark:divide-[#24292f] rounded-lg'>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base dark:text-white'>Download Resume</p>
                    <Link href="https://iamjulius.notion.site/Julius-Eghan-Resume-Cover-Letter-7e2405ee191a4cc9aae0af15fd806807">
                      <button>
                        <FileText className='text-black dark:text-white' size={18} />
                      </button>
                    </Link>
                </div>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base dark:text-white'>Check Out LinkedIn Profile</p>
                    <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                      <button>
                        <Linkedin className='text-black dark:text-white' size={18} />
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