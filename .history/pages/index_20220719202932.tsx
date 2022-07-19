import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col  bg-[#f7f2f2] dark:bg-[#090c10]  font-cadizMedium md:font-ApercuMedium  md:p-8">
      <Head>
        <title>iamjulius</title>
        <meta name="description" content="Website and Software Developer from Ghana." />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://iamjulius.com/"/>
        <meta property="og:title" content="Julius Eghan — Website and Software Developer"/>
        <meta property="og:description" content="Website and Software Developer from Ghana."/>
        <meta property="og:image" content="/Assets/newmemoji.svg"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://iamjulius.vercel.app/"/>
        <meta property="twitter:title" content="Julius Eghan — Developer, Digital Designer"/>
        <meta property="twitter:description" content="Website and Software Developer from Ghana."/>
        <meta property="twitter:image" content="/Assets/newmemoji.svg"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner/>
      <Navbar/>
      <About/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
