import React from 'react'

const HireMe = () => {
  return (
    <div className='p-4'>
        <div>
            <div className='px-2 pb-1'>
                <p className='text-base font-cadizBold'>Hire Me, Add me to your team.</p>
            </div>
            <div className='border-2  divide-y-2 rounded-lg'>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base'>Download Resume</p>
                    <p className='text-base'>Download Resume</p>
                </div>
                <div className='flex justify-between items-center p-2'>
                    <p className='text-base'>Check Out LinkedIn Profile</p>
                    <p>Download Resume</p>
                </div>
            </div>
            <div className='px-2'>
                <p>A short description on my emplyment</p>
            </div>
        </div>
    </div>
  )
}

export default HireMe