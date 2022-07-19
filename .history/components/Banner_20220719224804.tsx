import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className=' sticky top-0 z-50 flex flex-col items-center justify-center  md:rounded-lg dark:bg-[#0d1117] bg-white mb-4 mt-2 p-2 border-2 dark:border-[#24292f]'>
        <p className='text-xs dark:text-white text-black'>Currently Seeking a Job as Front-End Web Developer. <Link href="#Contact"><span className='text-green-500 cursor-pointer'>Hire Me</span></Link></p>
    </div>
  )
}

export default Banner