import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <div className='flex flex-col px-4 md:grid md:grid-cols-3 md:gap-4 md:px-4 items-center justify-center'>
        <div className='bg-white col-span-2 my-1 p-4 rounded-lg border'>
          <div>
            <Image src="/Assets/iamjulius-memoji.svg" width={64} height={64} alt="" />
            {/* put the dark mode toggle here */}
          </div>
          <div>
            <h1 className='text-base'>Hey there,👋</h1>
            <p className='text-base'>I’m Julius Eghan a Digital Designer and a Software Developerfrom Accra, Ghana 🇬🇭.I am interested in React, Product Designs,Startups and Music.</p>
          </div>
        </div>
        {/* this is the links */}
        <div className='flex bg-white  my-1 md:grid md:grid-cols-2 md:gap-4 gap-8 p-2  items-center justify-center rounded-lg border'>
          <div className='flex items-center justify-center p-2 border rounded-lg hover:bg-[#ede8e8]'>
            <Link href="#">
              <button>
                <Image src="/Assets/instagram-icon.svg" width={50} height={50} alt="" />
              </button>
            </Link>
          </div>
          <div className='flex items-center justify-center p-2 border rounded-lg hover:bg-[#ede8e8]'>
            <Link href="#">
              <button>
                <Image src="/Assets/Linkedin-icon.svg" width={50} height={50} alt="" />
              </button>   
            </Link>
          </div>
          <div className='flex items-center justify-center p-2 border rounded-lg hover:bg-[#ede8e8]' >
            <Link href="#">
              <button>
                <Image src="/Assets/twitter-icon.svg" width={50} height={50} alt="" />
              </button>             
            </Link>
          </div>
          <div className='flex items-center justify-center p-2 border rounded-lg hover:bg-[#ede8e8]'>
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