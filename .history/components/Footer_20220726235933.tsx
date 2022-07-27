import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Subscribe from './Subscribe'
import { X } from 'react-feather'

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
      <div className=''>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
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
                
                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white border-2 dark:border-[#24292f] dark:bg-[#090c10] pt-6 text-left align-middle shadow-xl transition-all">
                   <div className='relative flex text-right items-center justify-end'>
                   <span className='absolute left-0 text-[10px] font-ApercuBold mx-6 mt-4 bg-blue-300 text-blue-800 py-1 px-2 rounded'>Front-End Web Developer</span>
                      <span onClick={closeModal} className="absolute cursor-pointer mt-4 mr-3 bg-gray-100 dark:bg-[#24292f] rounded-full">
                        <X className='text-black dark:text-white  m-1' size={20} />
                      </span>
                  </div>
                  {/* put the subscribe text here */}
                  <Subscribe/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </div>
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