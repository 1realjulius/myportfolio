import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Main = () => {

  return (
    <div>
      <div className='text-black dark:text-white flex flex-col md:grid md:grid-cols-3 md:gap-4 gap-2 px-4 md:px-4 py-2'>
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
            <h1 className='mx-2 font-cadizMedium'>Get in Touch</h1>
            <p className='px-2 text-xs'>Wanna create some change in the world contact me let make it happen.</p>
            <div className='flex flex-col items-start p-2 border-2 m-2  dark:border-[#24292f] rounded-lg'>
              <p className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 py-1 text-black dark:text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className='text-sm'>Phone Number</span>
              </p>
              <Link href="tel:+233549321512"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>+233_549321512</span></Link>
            </div>
            <div className='flex flex-col items-start p-2 border-2 m-2 dark:border-[#24292f] rounded-lg'>
              <p className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 py-1 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className='text-sm'>Email</span>
              </p>
              <Link href="mailto:iamjuliusbusiness@gmail.com?subject=Can I work with you 💰"><span className='text-sm cursor-pointer text-blue-400 hover:underline'>iamjuliusbusiness@gmail.com</span></Link>
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
