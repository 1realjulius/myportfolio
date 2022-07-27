import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Subscribe from './Subscribe'
import { Bell, Smile, X } from 'react-feather'

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
            <div className="fixed inset-0 bg-black bg-opacity-75" />
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
                
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:text-white dark:bg-[#0d1117] border-2 dark:border-[#24292f] px-2 pb-6 pt-2 text-left align-middle shadow-xl transition-all">
                <div className='relative flex text-right items-center justify-end'>
                    <span onClick={closeModal} className="p-1 cursor-pointer dark:bg-[#24292f] rounded-full">
                      <X size={20}/>
                    </span>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className=" mx-2 text-lg font-cadizMedium leading-4 text-gray-900 flex flex-col space-y-2"
                  >
                    <h1 className='text-white'>Launching Soon.</h1>
                    <h2>Ideatrends, Internet Tips and Tricks</h2>
                    <p className=' font-cadizMedium text-xs text-gray-400'>I have made  a guided Pricing and Packages for my Clients who want to make change in the world 🌍.</p>

                  </Dialog.Title>
                  <Subscribe/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    <div className='flex bg-white dark:text-white dark:bg-[#0d1117] border-2 dark:border-[#24292f] rounded-lg py-2 mb-4 px-4 mx-4 items-center justify-center'>
        <p className='flex text-xs'>I&apos;ve got something Awesome</p>
         <p
          onClick={openModal}
          className="flex px-1 text-xs items-center space-x-1 hover:underline text-blue-600 cursor-pointer"
         >
          <span>Check it Out</span>
          <Smile size={14}/> 
          </p>         

    </div>
    </div>
  )
}

export default Footer