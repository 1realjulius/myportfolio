import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div>
      <div className='text-black dark:text-white flex flex-col md:grid md:grid-cols-3 md:gap-4 gap-2 px-4 md:px-4 py-2'>
        {/* what i do section */}
        <div className='row-span-2 bg-white dark:bg-[#0d1117] flex flex-col p-4 border-2 dark:border-[#24292f] rounded-lg gap-2'>
          <div className='flex'>
            <h1>My Expertise!</h1>
          </div>
          <div className='flex flex-col items-start p-2 border-2  dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/webflow-icon.svg" width={55} height={22} alt="" />
            <h2 className='text-sm'><span>No-code Development</span> I can create a stunning and functional no-code webapp for your idea.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border-2 dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/figma-icon.svg" width={55} height={47} alt="" />
            <h2 className='text-sm'><span>Product Prototyping</span> I can create a prototype  for your next website or software idea.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border-2 dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/Notioncheck-logo.svg" width={88} height={22} alt="" />
            <h2 className='text-sm'><span>Productivity Checklists</span> I create checklists for your workflow to make it simplified and faster.</h2>
          </div>
          <div className='flex flex-col items-start pt-2 p-2 border-2 dark:border-[#24292f] rounded-lg'>
            <Image className='' src="/Assets/newmemoji.svg" width={30} height={30} alt="" />
            <h2 className='text-sm'><span>Partnership</span> I am always available for your startup partnership, to create the next change in the world.</h2>
          </div>
        </div>
        {/* projects section */}
        <div id='Projects' className='opacity-50 col-span-2 dark:bg-[#0d1117] dark:text-white bg-white dark:border-[#24292f] flex flex-col border-2 rounded-lg py-8 items-center justify-center cursor-not-allowed'>
          <div>Currently working on my projects</div>
        </div>
        {/* contact section */}
        <div id='Contact' className='col-span-2 text-black dark:bg-[#0d1117] dark:text-white bg-white flex flex-col border-2 dark:border-[#24292f] rounded-lg p-2'>
        <form action="#" method="POST">
              <div className=" dark:bg-[#0d1117]">
                <h1 className='px-4'>Contact Me</h1>
                <p className='px-4 text-sm  text-gray-500 dark:text-white'>Contact me with a short message on how i could be of help to your great idea. </p>
                <div className="px-4 py-2 bg-white dark:bg-[#0d1117] space-y-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-3">
                      <label htmlFor="clientMail" className="block text-sm dark:text-white font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="Client-email"
                          id="client-email"
                          className="focus:ring-indigo-500 dark:border-[#24292f] dark:bg-[#0d1117] focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm text-sm dark:text-white border-gray-300 border"
                          placeholder="your@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className=" block text-sm font-medium text-gray-700 dark:text-white">
                      Short Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 dark:bg-[#0d1117] focus:border-indigo-500 mt-1 block w-full sm:text-sm dark:text-white border dark:border-[#24292f] text-sm border-gray-300 rounded-md"
                        placeholder="Write your request here..."
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:bg-[#0d1117] dark:text-white">
                    • I will respond to your message as soon as possible & I will ocassionally send you offers and email to help you build a brand for your self •
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 dark:bg-[#0d1117] bg-gray-50 flex items-center  sm:px-6">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full py-2 px-4 pt-1 border border-transparent shadow-sm text-sm dark:border-[#24292f] rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Main