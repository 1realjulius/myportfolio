import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
 
  return (
    <div>
      <div className=' text-black dark:text-white flex flex-col px-4 md:grid md:grid-cols-3 md:gap-4 md:px-4 items-center justify-center'>
        <div className='bg-white dark:bg-[#0d1117] col-span-2 my-1 p-4 rounded-lg border-2 dark:border-[#24292f]'>
          <div className='flex items-center justify-between'>
            <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="" />
            {/* put the dark mode toggle here */}
          </div>
          <div className='flex flex-col'>
            <h1 className='text-base'>Hey there,👋</h1>
            <p className='text-sm'>I’m Julius Eghan a Digital Designer and a Software Developer from Accra, Ghana 🇬🇭.I am interested in React, Product Designs, Building Startups and Music.</p>
          </div>
        </div>
        {/* this is the links */}
        <div className='flex bg-white dark:bg-[#0d1117]  my-1 md:grid md:grid-cols-2 md:gap-4 gap-8 p-2  items-center justify-center rounded-lg border-2 dark:border-[#24292f]'>
          <div className='flex items-center justify-center p-2 border  dark:border-[#24292f] rounded-lg hover:bg-[#ea68bc]'>
            <Link href="https://www.instagram.com/juliuseghan_/">
              <button>
                <Image src="/Assets/instagram-icon.svg" width={50} height={50} alt="" />
              </button>
            </Link>
          </div>
          <div className='flex items-center justify-center p-2 border dark:border-[#24292f] rounded-lg hover:bg-[#2591c4]'>
            <Link href="https://www.linkedin.com/in/julius-baffour-eghan-4bb7a820a/">
              <button>
                <Image src="/Assets/Linkedin-icon.svg" width={50} height={50} alt="" />
              </button>   
            </Link>
          </div>
          <div className='flex items-center justify-center p-2 border dark:border-[#24292f] rounded-lg hover:bg-[#1c99e7]' >
            <Link href="https://twitter.com/iamjulius_e">
              <button>
                <Image src="/Assets/twitter-icon.svg" width={50} height={50} alt="" />
              </button>             
            </Link>
          </div>
          <div className='flex items-center justify-center p-2 border dark:border-[#24292f] rounded-lg hover:bg-[#385491]'>
            <Link href="#">
              <button>
                <Image src="/Assets/facebook-icon.svg" width={50} height={50} alt="" />
              </button>             
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About