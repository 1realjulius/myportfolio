import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col pt-4 bg-[#f7f2f2] dark:bg-[#090c10] font-ApercuMedium md:p-8">
      <Head>
        <title>iamjulius</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <About/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
