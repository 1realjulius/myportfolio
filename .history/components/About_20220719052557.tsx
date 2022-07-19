import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Copy, Facebook, Heart, Instagram, Linkedin, Music, Twitter } from 'react-feather'

const About = () => {

  return (
    <div>
      <div className=' text-black dark:text-white flex flex-col px-4  md:flex-row  md:px-4 items-center justify-center'>
        <div className='bg-white dark:bg-[#0d1117] col-span-2 my-1 p-4 rounded-lg border-2 dark:border-[#24292f]'>
          <div className='flex items-center justify-between'>
            <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="" />
            {/* put the dark mode toggle here */}
            <div className='flex space-x-4'>
              <div>
              <Link href="https://twitter.com/iamjulius_e">
                <button>
                  <Twitter className='text-black dark:text-white' size={30} />
                </button>
               </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/juliuseghan_/">
                  <button>
                  <Instagram className='text-black dark:text-white' size={30} />
                  </button>
                </Link>
              </div>
              <div>
              <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
                <button>
                  <Linkedin className='text-black dark:text-white' size={30} />
                </button>
              </Link>
              </div>
              <div>
              <Link href="#">
                <button>
                  <Facebook className='text-black dark:text-white' size={30} />
                </button>
              </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base'>Hey there,👋</h1>
            <p className='text-sm'>I’m <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-purple-400'>
              Julius Eghan</span>  a Freelance Website and Software Developer from Accra, Ghana 🇬🇭.I make websites and mobile apps with React Js and React Native.
            </p>
            <div className='flex space-x-4'>
            <Link href="https://open.spotify.com/user/l9obknmym5mbo8h0mp86ilvnv?si=5c8cb40d57be471d">
                <button className='text-green-400 flex space-x-1 items-center'>
                  <p className='flex items-center space-x-2'><span>I </span><Heart className='text-red-400 ' size={12} /><span> music</span></p>
                  <Music className='text-green-400 ' size={16} />
                </button>
            </Link>
            <div >
            <button className='text-green-400 flex space-x-1 items-center'  onClick={() =>  navigator.clipboard.writeText('www.iamjulius.com')} >
              <p className='flex items-center space-x-2'><span>Share My Portfolio</span></p>
              <Copy className='text-green-400 ' size={16} />
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About