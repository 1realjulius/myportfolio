import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between pb-2 md:px-4'>
      <div>Banner for work notices</div>
      <div className='flex flex-col sm:flex-row items-center justify-between pb-2 md:px-4'>
        <div className='py-1 pt-0 text-lg px-3 cursor-pointer font-ApercuBlack bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-purple-400'>iamjulius</div>
        <div className='flex text-black dark:text-white dark:bg-[#090c10] bg-[#ede8e8] rounded-full space-x-1 py-1 px-1 cursor-pointer dark:border-2 dark:border-[#24292f]'>
            <Link href="#"><button className='focus:bg-white dark:focus:bg-[#24292f] hover:bg-white hover:text-black rounded-full py-1  px-3 cursor-pointer text-sm'>All</button></Link>
            <Link href="#Projects"><button className='focus:bg-white dark:focus:bg-[#24292f] hover:bg-white hover:text-black rounded-full py-1  px-3 cursor-pointer text-sm'>Projects</button></Link>
            <Link href="#Contact"><button className='focus:bg-white dark:focus:bg-[#24292f] hover:bg-white hover:text-black rounded-full py-1  px-3 cursor-pointer text-sm'>Contact</button></Link>
        </div></div>
    </div>
  )
}

export default Navbar