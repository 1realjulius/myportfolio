import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center dark:bg-[#0d1117] bg-white mb-4 p-2'>
        <p className='text-sm dark:text-white text-black'>Currently Seeking Job as a Front-End Web Developer. <Link href="#Contact"><span className='text-green-500 cursor-pointer'>Hire Me</span></Link></p>
    </div>
  )
}

export default Banner