import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
const Home: NextPage = () => {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50">
      <Head>
        <title>Instagram 2.0 Youtube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />

      {/* feed */}
      <Feed />
      {/* modal */}
    </div>
  )
}

export default Home
