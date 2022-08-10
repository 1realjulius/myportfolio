// pages/404.js
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Custom404() {
    return (
        <div className="flex min-h-screen items-center justify-center  flex-col dark:text-white bg-[#f7f2f2] dark:bg-[#090c10]  font-cadizMedium  md:px-8 md:pb-8">
            <div className=''>
                <div className='flex'>
                    <h1>404</h1>
                    <p>This Page Can Not Be Found</p>
                </div>
                <div className='flex'>
                    <Image src="/Assets/newmemoji.svg" width={72} height={72} alt="Julius Eghan Memoji" className=' animate-headShake' />
                    <Link href="/">
                        <span className="cursor-pointer">
                            Go Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}