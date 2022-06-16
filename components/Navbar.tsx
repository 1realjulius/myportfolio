import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between pb-2 md:px-4'>
        <div className='py-1 pt-0 text-lg px-3 cursor-pointer font-ApercuBlack bg-gradient-to-r text-transparent bg-clip-text from-blue-800 to-purple-400'>iamjulius</div>
        <div className='flex bg-[#ede8e8] rounded-full space-x-1 py-1 px-1 cursor-pointer'>
            <button className='focus:bg-white rounded-full py-1 pt-0 px-3 cursor-pointer'>All</button>
            <button className='focus:bg-white rounded-full py-1 pt-0 px-3 cursor-pointer'>About</button>
            <button className='focus:bg-white rounded-full py-1 pt-0 px-3 cursor-pointer'>Projects</button>
        </div>
    </div>
  )
}

export default Navbar