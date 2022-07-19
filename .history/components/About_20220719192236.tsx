import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Copy, Facebook, FileText, Heart, Instagram, Linkedin, Music, Twitter } from 'react-feather'

const About = () => {

  return (
    <div>
      <div className=' text-black dark:text-white flex flex-col px-4  md:flex-row  md:px-4 items-center justify-center'>
        <div className='bg-white dark:bg-[#0d1117] col-span-2 my-1 p-4 rounded-lg border-2 dark:border-[#24292f]'>
          <div className='flex items-center justify-between'>
            <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="" />
            {/* put the dark mode toggle here */}
            <div className='flex flex-row  space-x-62'>
              <div>
              <Link href="https://twitter.com/iamjulius_e">
                <button>
                  <Twitter className='text-black dark:text-white' size={25} />
                </button>
               </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/juliuseghan_/">
                  <button>
                  <Instagram className='text-black dark:text-white' size={25} />
                  </button>
                </Link>
              </div>
              <div>
              <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                <button>
                  <Linkedin className='text-black dark:text-white' size={25} />
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base'>Hey there,👋</h1>
            <p className='text-sm'>I’m <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-purple-400'>
              Julius Eghan</span>  a Freelance Website and Software Developer from Accra, Ghana 🇬🇭. I make professional and functional websites and mobile apps with React Js and React Native. I love making memorable change to the world all while listening to <Link href="https://open.spotify.com/user/l9obknmym5mbo8h0mp86ilvnv?si=5c8cb40d57be471d"><span className='text-green-400'>music.</span></Link>
            </p>
            <div className='flex space-x-5 pt-2'>
            <div>
              <button className='text-gray-500 flex space-x-1 items-center'  onClick={() =>  navigator.clipboard.writeText('https://www.iamjulius.com/')} >
                <p className='flex text-sm items-center space-x-2'><span>Copy My Portfolio Link</span></p>
                <Copy className='text-gray-500 ' size={14} />
              </button>
            </div>
            <div>
              <Link href="https://iamjulius.notion.site/Julius-Eghan-Resume-Cover-Letter-7e2405ee191a4cc9aae0af15fd806807">
                <button  className='text-gray-500 flex space-x-1 items-center'>
                  <span className='text-sm'>Get my Resume</span>
                <FileText className='text-gray-500' size={14} />
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