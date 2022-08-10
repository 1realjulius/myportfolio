// pages/404.js
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Copy, ExternalLink,} from 'react-feather'


export default function Custom404() {
    return (
        <div className="flex min-h-screen items-center justify-center  flex-col dark:text-white bg-[#f7f2f2] dark:bg-[#090c10]  font-cadizMedium  md:px-8 md:pb-8">
            <div className=''>
                <div className='flex divide-x-2 mb-4 dark:divide-[#24292f] items-center'>
                    <h1 className='pr-4 py-2 text-4xl'>404</h1>
                    <p className='pl-4 py-2 '>This Page Can Not Be Found.</p>
                </div>
                <div className='flex items-center justify-center p-2 space-x-2 bg-white dark:bg-[#0d1117] border-2 border-gray-300 dark:border-[#24292f] rounded-lg  hover:opacity-80'>
                    <Image src="/Assets/newmemoji.svg" width={42} height={42} alt="Julius Eghan Memoji" className=' animate-headShake' />
                    <Link href="/">
                        <h1 className="flex items-center space-x-2 cursor-pointer text-gray-400 text-xl hover:text-white">
                            <span>Go Back Home...</span>
                        </h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}