import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div>
      <div className='constainer flex flex-col md:grid md:grid-cols-3 md:gap-4 gap-2 px-4 md:px-4 py-2'>
        {/* what i do section */}
        <div className='row-span-2 bg-white flex flex-col p-4 border rounded-lg gap-2'>
          <div className='flex'>
            <h1>My Expertise!</h1>
          </div>
          <div className='flex flex-col items-start p-2 border rounded-lg'>
            <Image className='' src="/Assets/webflow-icon.svg" width={55} height={22} alt="" />
            <h2 className='text-sm'><span>No-code Development</span> I can create a stunning and functional no-code webapp for your idea.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border rounded-lg'>
            <Image className='' src="/Assets/figma-icon.svg" width={55} height={47} alt="" />
            <h2 className='text-sm'><span>Product Prototyping</span> I can create a prototype  for your next website or software idea.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border rounded-lg'>
            <Image className='' src="/Assets/Notioncheck-logo.svg" width={88} height={22} alt="" />
            <h2 className='text-sm'><span>Productivity Checklists</span> I create checklists for your workflow to make it simplified and faster.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border rounded-lg'>
            <Image className='' src="/Assets/iamjulius-memoji.svg" width={30} height={30} alt="" />
            <h2 className='text-sm'><span>Partnership</span> I am always available for your startup partnership, to create the next change in the world.</h2>
          </div>
        </div>
        {/* projects section */}
        <div className=' bg-white flex flex-col items-center justify-center'>
          <Image className='' src="/Assets/notioncheck-light.png" width={292} height={323} alt="" />
          {/* <Link href="#">
              <button className='p-2 bg-purple-400 text-white'>
                Notioncheck
              </button>
            </Link> */}
        </div>
        <div className=' bg-white flex flex-col items-center justify-center'>
          <Image className='' src="/Assets/notioncheck-light.png" width={292} height={323} alt="" />
          {/* <Link href="#">
              <button className='p-2 bg-purple-400 text-white'>
                Notioncheck
              </button>
            </Link> */}
        </div>
        {/* contact section */}
        <div className='col-span-2 bg-white'>hello</div>
      </div>
    </div>
  )
}

export default Main