import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather'

const About = () => {

  return (
    <div>
      <div className=' text-black dark:text-white flex flex-col px-4 w-full  md:flex-row  md:px-4 items-center justify-center'>
        <div className='bg-white dark:bg-[#0d1117] col-span-2 my-1 p-4 rounded-lg border-2 dark:border-[#24292f]'>
          <div className='flex items-center justify-between'>
            <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="" />
            {/* put the dark mode toggle here */}
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base'>Hey there,👋</h1>
            <p className='text-sm'>I’m <span className='bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-purple-400'>Julius Eghan</span>  a Freelance Website and Software Developer from Accra, Ghana 🇬🇭.I specialize in React sJs, React Native and Product Design. I love building Startups and listerning to music.</p>
          </div>
        </div>
        {/* this is the links */}
      </div>
    </div>
  )
}

export default About