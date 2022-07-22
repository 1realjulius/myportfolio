import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Main = () => {


  return (
    <div>
      <div className='text-black dark:text-white flex flex-col md:grid md:grid-cols-3 md:gap-4 gap-2 px-4 md:px-4 py-2'>
        {/* project 1 section */}
        <div id='Projects' className='row-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg p-4'>
          <div className='flex flex-col '>
            <div className='flex flex-row bg-blue-400 items-center p-2 '>
              <Image src="/Assets/notion-logo-1.svg" width="24" height='24' alt="" className='' />
              <h1> Official Notion Template</h1>
            </div>
          </div>
          <div className="flex">
            <Image src="/Assets/Notioncheck-logo-01.svg" width="24" height='24' alt="" className='' />
            <h1>Notioncheck</h1>
          </div>
          <div>Project 1</div>
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
              <h2 className='text-sm'><span className='font-cadizMedium'>Next Js Websites.</span> I write clean and functional codes for websites like E-comerce, Portfolio sites, Agency Sites and Saas Sites.</h2>
            </div>
            <div className='flex flex-col items-start pt-2 p-2 '>
            <Image className='' src="/Assets/react-native.png" width={24} height={22} alt="" />
              <h2 className='text-sm'><span className='font-cadizMedium'>React Native Apps.</span> I code functioanl mobile and desktop apps with one of the best cross-platform frameworks.I can make you a functioal ios, android, windows app, mac app, watch Os app and web apps.</h2>
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
              <Image className='' src="/Assets/newmemoji.svg" width={30} height={30} alt="" />
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
                <p className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 py-1 text-black dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className='text-sm'>Phone Number</span>
                </p>
                <Link href="tel:+233549321512"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>+233 549321512</span></Link>
              </div>
              <div className='flex justify-between p-2'>
                <p className='flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 py-1 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className='text-sm'>Email</span>
                </p>
                <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Can I work with you 💰"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>iamjuliusbusiness@gmail.com</span></Link>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <span className='text-[10px] px-2 justify-center text-center'>• I will respond to your message as soon as possible to kickstart your idea •</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
