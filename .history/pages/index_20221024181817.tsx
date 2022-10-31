import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MainHOme from "../components/MainHOme";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center scroll-smooth  bg-[#f7f2f2] font-cadizMedium  dark:bg-[#090c10]  md:px-8 md:pb-8">
      <Head>
        <title>Julius Eghan</title>
        <meta
          name="description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iamjulius.com/" />
        <meta
          property="og:title"
          content="Julius Eghan — Website and Software Developer"
        />
        <meta
          property="og:description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="og:image" content="/Assets/newmemoji.svg" />
        <meta property="twitter:card" content="/Assets/Julius_Eghan.jpg" />
        <meta property="twitter:url" content="https://www.iamjulius.com/" />
        <meta
          property="twitter:title"
          content="Julius Eghan — Website and Software Developer"
        />
        <meta
          property="twitter:description"
          content="Website and Software Developer from Ghana."
        />
        <meta property="twitter:image" content="/Assets/Julius_Eghan.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="0HesePHVymRqGiL70HUKPIq0Zsap0uUIb_Ci0DpImRY"
        />
        <meta
          name="theme-color"
          content="#f7f2f2"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#090c10"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <div className="max-w-7xl">
        {/* <Banner /> */}
        <MainHOme />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
