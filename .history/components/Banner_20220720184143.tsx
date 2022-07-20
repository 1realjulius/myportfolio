import React from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Banner = () => {

      
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  return (
    <div className=' sticky top-0 z-50 flex flex-col items-center justify-center  rounded-lg dark:bg-[#0d1117] bg-white mb-4 mt-2 mx-1 p-2 border-2 dark:border-[#24292f]'>
      <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-6 pb-6 pt-2 text-left align-middle shadow-xl transition-all">
                <div className='relative flex text-right items-center justify-end'>
                    <button onClick={closeModal} className="m-1">
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      </span>
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-cadizMedium leading-4 text-gray-900 flex flex-col items-center justify-center"
                  >
                    <h1>Get My Pricing and Packages List.</h1>
                    <p className=' font-cadizMedium text-xs text-gray-500 text-center'>I have made  a guided Pricing and Packages for my Clients who want to make change in the world 🌍.</p>

                  </Dialog.Title>
                  {/* put the subscribe text here */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </div>
        <p className='text-sm dark:text-white text-black'>Currently Seeking a Job as Front-End Web Developer. <span onClick={openModal} className='text-green-500 hover:underline cursor-pointer'>Hire Me</span></p>
    </div>
  )
}

export default Banner