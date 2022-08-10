import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Copy, FileText, Instagram, Linkedin, Twitter } from 'react-feather'

const About = () => {
  return (
    <div>
      <div className=' text-black dark:text-white flex flex-col px-4  md:flex-row  md:px-4 items-center justify-center'>
        <div className='bg-white dark:bg-[#0d1117]  my-1 p-4 rounded-lg border-2 dark:border-[#24292f]'>
          <div className='flex items-center justify-between'>
            <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="Julius Eghan Memoji" className=' animate-headShake' />
            {/* put the dark mode toggle here */}
            <div className='flex flex-row items-center space-x-6'>
              <div>
              <Link href="https://twitter.com/iamjulius_e">
                <button className='animate-bounce'>
                  <Twitter className='text-black dark:text-white hover:text-[#1DA1F2]' size={25} />
                </button>
               </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/juliuseghan_/">
                  <button className=''>
                  <Instagram className='text-black dark:text-white hover:text-[#fb3958]' size={25} />
                  </button>
                </Link>
              </div>
              <div>
              <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                <button className=''>
                  <Linkedin className='text-black dark:text-white hover:text-[#0072b1]' size={25} />
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base'>Hey there, <span className='animate-wiggle'>👋</span></h1>
            <p className='text-sm'>I’m <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-purple-400'>
              Julius Eghan</span>  a Freelance Website and Software Developer from Accra, Ghana 🇬🇭. I make professional websites and mobile apps with React Js and React Native. I love making memorable change to the world 🌍 all while listening to <Link href="#Spotify"><span className='text-green-400 hover:underline cursor-pointer animate-pulse'>music.</span></Link>
            </p>
            <div className='flex space-x-5 pt-2'>
            <div>
              <button className='text-gray-500 flex space-x-1 items-center'  onClick={() =>  navigator.clipboard.writeText('https://www.iamjulius.com/')} >
                <p className='flex text-sm hover:underline items-center space-x-2'><span>Copy Link</span></p>
                <Copy className='text-gray-500 ' size={14} />
              </button>
            </div>
            <div>
              <Link href="https://iamjulius.notion.site/Julius-Eghan-Resume-Cover-Letter-7e2405ee191a4cc9aae0af15fd806807">
                <button  className='text-gray-500 flex space-x-1 items-center'>
                  <span className='text-sm hover:underline'>Get my Resume</span>
                <FileText className='text-gray-500 animate-wiggle' size={14} />
                </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About