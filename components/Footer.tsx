import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-ApercuMedium leading-4 text-gray-900"
                  >
                    Be first to know when it is launched.
                  </Dialog.Title>
                  <p className=' font-ApercuMedium text-sm text-gray-500'>Add your email to get the feature list of what to expect in the Web Dev workspce.</p>
                  <div className="col-span-3 sm:col-span-3">
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="new-client-name"
                          id="new-client-name"
                          className="font-ApercuMedium focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-xs text-xs border-gray-300"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                  <div className="col-span-3 sm:col-span-3">
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="new-lient-email"
                          id="new-client-email"
                          className="font-ApercuMedium focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-xs text-xs border-gray-300"
                          placeholder="your@example.com"
                        />
                      </div>
                    </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full"
                      onClick={closeModal}
                    >
                      Get Notified
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    <div className='flex bg-white dark:text-white dark:bg-[#0d1117] border-2 dark:border-[#24292f] rounded-lg py-2 mb-4 px-4 mx-4 items-center justify-center'>
        <p className='text-xs'>I am Building a Web Dev Freelance Workspace.
         <span
          onClick={openModal}
          className="px-1 hover:underline text-blue-600 cursor-pointer"
         >
            Get notified!</span>
            
            
        </p>
    </div>
    </div>
   
  )
}

export default Footer