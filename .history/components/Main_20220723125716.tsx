import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Clock, ExternalLink, Mail, Phone, PhoneCall, Speaker, X,} from 'react-feather'

const Main = () => {


  return (
    <div>
      <div className='text-black dark:text-white flex flex-col md:grid md:grid-cols-3 md:gap-4 gap-2 px-4 md:px-4 py-2'>
        {/* project 1 section */}
        <div id='Projects' className='row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg p-4'>
          <div className='flex space-x-2'>
            <div className='flex  items-center'>
              <div className='flex flex-row bg-white items-center py-1 px-2 rounded space-x-2'>
                <Image src="/Assets/notion-logo-1.svg" width="12" height='12' alt="" className='' />
                <h1 className='text-[12px] text-black'>Notion</h1>
              </div>
            </div>
            <div className='flex  items-center'>
              <div className='flex flex-row bg-blue-200 items-center py-1 px-2 rounded space-x-2'>
                <Image src="/Assets/notion-logo-1.svg" width="12" height='12' alt="" className='' />
                <h1 className='text-[12px] text-black'>Free and Premium</h1>
              </div>
            </div>
            <div className='flex  items-center'>
              <div className='flex flex-row bg-blue-200 items-center py-1 px-2 rounded space-x-2'>
                <h1 className='text-[12px] text-black'>Check it out</h1>
                <ExternalLink className='text-green-600' size={14} />
              </div>
            </div>
          </div>
          <div className="my-2 mt-6 flex  space-x-2">
            <Image src="/Assets/Notioncheck-logo-01.svg" width="80%" height='80%' alt="" className='flex-1' />
            <div className='flex-1 items-center justify-center'>
              <h1 className='text-base'>Notioncheck (Notion Checklists)</h1>
              <p className='text-xs text-gray-400'>Simplify your workflows with my Functional, comprehensive and beginner friendly notion checklists.</p>
            </div>
          </div>
          <div className='flex space-x-2 items-center justify-center bg-gray-200 dark:bg-inherit dark:border-2 dark:border-[#24292f] py-1 rounded-lg'>
            <Link href="/">
               <div className='flex py-1 px-3 items-center  cursor-pointer space-x-2 animate-pulse hover:underline'>
                    <p className='text-black dark:text-white  text-sm leading-none'>Project Page Coming Soon </p>
                    <Clock className='text-black dark:text-white' size={18} />
               </div>
            </Link>
          </div>
        </div>
        {/* project 2 section */}
        <div id='Projects' className='opacity-50 col-span-2 row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-8 items-center justify-center cursor-not-allowed'>
          <div>Currently working on my project 2</div>
        </div>
        {/* project 3 section */}
        <div id='Projects' className='opacity-50 col-span-2 row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-8 items-center justify-center cursor-not-allowed'>
          <div>Currently working on my project3</div>
        </div>
        {/* what i do section */}
        <div className='row-span-3 bg-white dark:bg-[#0d1117] flex flex-col p-4 border-2 dark:border-[#24292f] rounded-lg gap-2'>
          <div className='flex'>
            <h1 className='ml-2'>My Expertise!</h1>
          </div>
          <div className='border-2 divide-y-2  dark:border-[#24292f] dark:divide-[#24292f] rounded-lg'>
            <div className='flex flex-col items-start pt-2 p-2 '>
            <Image className='' src="/Assets/nextjs-logo.png" width={22} height={22} alt="" />
              <h2 className='text-sm'><span className='font-cadizMedium'>Next Js Websites.</span> I write clean and functional codes for websites like <span className='text-blue-400'> E-comerce</span>, <span className='text-blue-400'>Portfolio sites</span>,<span className='text-blue-400'> Agency Sites</span> and <span className='text-blue-400'>Saas Sites.</span></h2>
            </div>
            <div className='flex flex-col items-start pt-2 p-2 '>
            <Image className='' src="/Assets/react-native.png" width={24} height={22} alt="" />
              <h2 className='text-sm'><span className='font-cadizMedium'>React Native Apps.</span> I code functioanl mobile and desktop apps with one of the best cross-platform frameworks.I can make you a functioal <span className='text-blue-400'>ios</span>, <span className='text-blue-400'>android</span>, <span className='text-blue-400'>windows app</span>, <span className='text-blue-400'>mac app</span>, and <span className='text-blue-400'>web apps.</span></h2>
            </div>
            <div className='flex flex-col items-start pt-2 p-2 '>
              <Image className='' src="/Assets/webflow-icon.svg" width={55} height={22} alt="" />
              <h2 className='text-sm'><span className='font-cadizMedium'>No-code Development.</span> I can create a stunning and functional no-code webapp for your idea.</h2>
            </div>
            <div className='flex flex-col items-start pt-2 p-2'>
              <Image className='' src="/Assets/figma-icon.svg" width={55} height={47} alt="" />
              <h2 className='text-sm'><span className='font-cadizMedium'>Product Prototyping.</span> I can create a prototype  for your next website or software idea.</h2>
            </div>
            <div className='flex flex-col items-start pt-2 p-2'>
              <Image className=' animate-spin' src="/Assets/newmemoji.svg" width={30} height={30} alt=""  />
              <h2 className='text-sm'><span className='font-cadizMedium'>Partnership.</span> I am always available for your startup partnership, to create the next change in the world.</h2>
            </div>
          </div>
        </div>
        {/* about me */}
        <div id='Projects' className='opacity-50 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-6 items-center justify-center cursor-not-allowed'>
          <h1>My Journey</h1>
          <p className='text-xs md:text-sm px-2 justify-center text-center'>A short story about being an Entrepreneur and their final destination 🏖️</p>
        </div> 
        {/* contact me */}
        <div id='Contact' className=' dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg p-2 justify-center'>
          <div className=''>
            <h1 className='mx-2 font-cadizMedium'>Get in Touch</h1>
            <p className='px-2 text-xs'>Wanna create some change in the world 🌍 contact me let make it happen.</p>
            <div className='border-2 m-2 divide-y-2 dark:divide-[#24292f] dark:border-[#24292f] rounded-lg'>
              <div className='flex justify-between p-2'>
                <p className='flex items-center space-x-2'>
                  <PhoneCall className='text-black dark:text-white' size={16} />
                  <span className='text-sm'>Phone Number</span>
                </p>
                <Link href="tel:+233549321512"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>+233 549321512</span></Link>
              </div>
              <div className='flex justify-between p-2'>
                <p className='flex items-center space-x-2'>
                  <Mail className='text-black dark:text-white' size={18} />
                  <span className='text-sm'>Email</span>
                </p>
                <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Can I work with you 💰"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>iamjuliusbusiness@gmail.com</span></Link>
              </div>
            </div>
            {/* other */}
            <div className='flex items-center justify-center'>
              <span className='text-[10px] text-gray-400 px-2 justify-center text-center'>• I will respond to your message as soon as possible to kickstart your awsome idea •</span>
            </div>
            <p className='px-2 text-sm'>More.</p>
            <div className='border-2 border-green-200 m-2 divide-y-2 bg-green-200 dark:bg-inherit dark:divide-[#24292f] dark:border-[#24292f] rounded-lg'>
              <Link href="https://open.spotify.com/user/l9obknmym5mbo8h0mp86ilvnv?si=5c8cb40d57be471d">
                <div id='Spotify' className='flex justify-between cursor-pointer  p-2'>
                  <p className='flex items-center space-x-2'>
                    <Image className='' src="/Assets/spotify-1.svg" width={60} height={22} alt="" />
                    <span className='text-sm text-green-600'>View My Profile</span>
                  </p>
                  <Speaker className='text-green-600' size={18} />
                </div>
              </Link>
              {/* Put other stuff here */}
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
