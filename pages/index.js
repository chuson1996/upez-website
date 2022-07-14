import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://upez.framer.website';
  }, [])
  return (
    <div className="container">
      <Head>
        <title>UPEZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Redirecting
        </p>
      </main>

      <Footer />
    </div>
  )
}
