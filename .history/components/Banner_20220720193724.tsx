import React from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Copy, Linkedin, X,} from 'react-feather'
import HireMe from './HireMe'

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
                
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white px-6 pb-6 pt-2 text-left align-middle shadow-xl transition-all">
                   <div className='relative flex text-right items-center justify-end'>
                      <span onClick={closeModal} className=" cursor-pointer">
                      <X className='text-black' size={25} />
                      </span>
                  </div>
                  {/* put the subscribe text here */}
                  <HireMe/>
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