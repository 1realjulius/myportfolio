import React from 'react'
import Link from 'next/link'
import { File, FileText, Linkedin, Mail, Phone} from 'react-feather'

const HireMe = () => {
  return (
    <div className='p-4 pt-8 font-cadizMedium'>
        <div>
            <div className='px-2 pb-2'>
                <p className='text-base font-cadizMedium dark:text-white'>Hire Me Now!👌</p>
                <p className='text-sm font-cadizMedium text-gray-400'>I am familiar with systems like Git, Expo, Web 3 development, Webflow and Figma. I am dedicated to driving <span className='text-black dark:text-white'> innovation</span> with the ability to follow industry and technological trends and facilitating the early adoption of <span className='text-black dark:text-white'> innovations.</span></p>
            </div>
            <div className='border-2 dark:border-[#24292f] divide-y-2 dark:divide-[#24292f] rounded-lg'>
                <div className=' p-2'>
                    <Link href="/Assets/files/Julius_Eghan-Cover-letter.pdf" download="Julius_Eghan-Cover-Letter.pdf" target="_blank">
                        <div className='flex justify-between items-center cursor-pointer'>
                            <p className='text-base dark:text-white'>Get My Cover Letter</p>
                            <File className='text-black cursor-pointer dark:text-white' size={18} />
                        </div>
                    </Link>
                </div>
                <div className=' p-2'>
                <Link href="/Assets/files/Julius_Eghan-Resume.pdf" download="Julius_Eghan-Resume.pdf" target="_blank">
                        <div className='flex justify-between items-center cursor-pointer'>
                            <p className='text-base dark:text-white'>Download My Resume</p>
                            <FileText className='text-black cursor-pointer dark:text-white' size={18} />
                        </div>
                    </Link>
                </div>
                <div className=' p-2'>
                    <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                        <div className='flex justify-between items-center cursor-pointer'>
                            <p className='text-base dark:text-white'>Check Out My LinkedIn Profile</p>
                            <Linkedin className='text-black  dark:text-white' size={18} />
                        </div>
                    </Link>
                </div>
                <div className=' p-2'>
                    <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Hey, I want you to Join Our Team 🎉">
                        <div className='flex justify-between items-center cursor-pointer'>
                            <p className='text-base dark:text-white'>Send Me An Email</p>
                            <Mail className='text-black  dark:text-white' size={18} />
                        </div>
                    </Link>
                </div>
                <div className=' p-2'>
                    <Link href="tel:+233549321512">
                        <div className='flex justify-between items-center cursor-pointer'>
                            <p className='text-base text-green-400'>Call Me Now...</p>
                            <Phone className='text-green-400' size={18} />
                        </div>
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