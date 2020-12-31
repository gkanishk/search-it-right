import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingPage from './components/landingPage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IPL PUNCH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LandingPage/>
      </main>
      
    </div>
  )
}
