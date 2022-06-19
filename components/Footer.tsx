import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Subscribe from './Subscribe'

const Footer = () => {
  
    
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  


  return (
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
                    className="text-lg font-ApercuMedium leading-4 text-gray-900 flex flex-col items-center justify-center"
                  >
                    <h1>Get My Pricing and Packages List.</h1>
                    <p className=' font-ApercuMedium text-xs text-gray-500 text-center'>I have made  a guided Pricing and Packages for my Clients who want to make change in the world 🌍.</p>

                  </Dialog.Title>
                  <Subscribe/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    <div className='flex bg-white dark:text-white dark:bg-[#0d1117] border-2 dark:border-[#24292f] rounded-lg py-2 mb-4 px-4 mx-4 items-center justify-center'>
        <p className='text-xs'>I have created a Pricing and Packages List.
         <span
          onClick={openModal}
          className="px-1 hover:underline text-blue-600 cursor-pointer"
         >
            Get Yours Now!</span>
            
            
        </p>
    </div>
    </div>
   
  )
}

export default Footer