import Head from 'next/head' 
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './comps/footer'
import Navbar from './comps/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width"/>
        <meta charSet="utf-8"/>
        <title>Phil Akagu-Jones</title>
        <meta name="description" content="Phil Akagu-Jones is a software engineer who specializes in building and designing phenomenal digital applications" />
        <meta name="theme-color" content="currentColor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.message}>
          <p>Hello my name is Phil. I am currently in my second year @ SFU pursuing a degree in computer science.</p>
        </div>

        <div className={styles.projects}>
          <h1>Work / Projects</h1>
        </div>

        <div className={styles.hobbies}>
          <h1>Pastimes</h1>
        </div>

      </main>

      <Footer />

    </div>
  )
}
