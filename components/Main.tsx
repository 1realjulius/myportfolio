import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Main = () => {

  return (
    <div>
      <div className='text-black dark:text-white flex flex-col md:grid md:grid-cols-3 md:gap-4 gap-2 px-4 md:px-4 py-2'>
        {/* what i do section */}
        <div className='row-span-2 bg-white dark:bg-[#0d1117] flex flex-col p-4 border-2 dark:border-[#24292f] rounded-lg gap-2'>
          <div className='flex'>
            <h1>My Expertise!</h1>
          </div>
          <div className='flex flex-col items-start p-2 border-2  dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/webflow-icon.svg" width={55} height={22} alt="" />
            <h2 className='text-sm'><span>No-code Development</span> I can create a stunning and functional no-code webapp for your idea.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border-2 dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/figma-icon.svg" width={55} height={47} alt="" />
            <h2 className='text-sm'><span>Product Prototyping</span> I can create a prototype  for your next website or software idea.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border-2 dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/Notioncheck-logo.svg" width={88} height={22} alt="" />
            <h2 className='text-sm'><span>Productivity Checklists</span> I create checklists for your workflow to make it simplified and faster.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border-2 dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/newmemoji.svg" width={30} height={30} alt="" />
            <h2 className='text-sm'><span>Partnership</span> I am always available for your startup partnership, to create the next change in the world.</h2>
          </div>
        </div>
        {/* projects section */}
        <div id='Projects' className='opacity-50 col-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-8 items-center justify-center cursor-not-allowed'>
          <div>Currently working on my projects</div>
        </div>
        {/* about me */}
        <div id='Projects' className='opacity-50 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-6 items-center justify-center cursor-not-allowed'>
          <h1>My Journey</h1>
          <p className='text-xs md:text-sm px-2 justify-center text-center'>A short story about being an Entrepreneur and their final destination 🏖️</p>
        </div> 
        {/* contact me */}
        <div id='Contact' className=' dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg p-2 justify-center'>
          <div className=''>
            <h1 className='mx-2 font-ApercuBold'>Get in Touch</h1>
            <p className='px-2 text-xs'>Wanna create some change in the world contact me let make it happen.</p>
            <div className='flex flex-col items-start p-2 border-2 m-2  dark:border-[#24292f] rounded-lg'>
              <span>Phone Number</span>
              <Link href="tel:+233549321512"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>+233549321512</span></Link>
            </div>
            <div className='flex flex-col items-start p-2 border-2 m-2 dark:border-[#24292f] rounded-lg'>
              <span>Email</span>
              <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Want to work with you 💰"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>iamjuliusbusiness@gmail.com</span></Link>
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