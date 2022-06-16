import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f2f2] font-ApercuMedium md:p-8">
      <Head>
        <title>iamjulius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <About/>
      <Main/>

    </div>
  )
}

export default Home
