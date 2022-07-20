import React from 'react'
import Link from 'next/link'
import { FileText, Linkedin} from 'react-feather'

const HireMe = () => {
  return (
    <div className='p-4 pt-8 font-cadizMedium'>
        <div>
            <div className='px-2 pb-2'>
                <p className='text-base font-cadizMedium dark:text-white'>Hire Me Now!👌</p>
                <p className='text-sm font-cadizMedium text-gray-400'>I am familiar with systems like Git, Expo, Web 3 development, Webflow and Figma. I am dedicated to driving <span className='text-gray-400 dark:text-white'> innovation</span> with the ability to follow industry and technological trends and facilitating the early adoption of <span className='text-gray-400 dark:text-white'> innovation.</span></p>
            </div>
            <div className='border-2 dark:border-[#24292f] divide-y-2 dark:divide-[#24292f] rounded-lg'>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base dark:text-white'>Download My Resume</p>
                    <Link href="https://iamjulius.notion.site/Julius-Eghan-Resume-Cover-Letter-7e2405ee191a4cc9aae0af15fd806807">
                        <FileText className='text-black cursor-pointer dark:text-white' size={18} />
                    </Link>
                </div>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base dark:text-white'>Check Out My LinkedIn Profile</p>
                    <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                        <Linkedin className='text-black cursor-pointer dark:text-white' size={18} />
                    </Link>
                </div>
            </div>
            <div className='px-2 pt-1'>
                <p className='text-sm text-gray-400'>Feel free to contact me directly should you require anything further.</p>
            </div>
        </div>
    </div>
  )
}

export default HireMe