import Head from 'next/head' 
import styles from '../styles/Home.module.css'
import Card1 from './comps/card1'
import Card2 from './comps/card2'
import Card3 from './comps/card3'
import Footer from './comps/footer'
import Navbar from './comps/navbar'
import Tabs from './comps/tabs'
import { Button } from "@nextui-org/react";

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
          <p>
            currently in my undergrad at SFU where i am pursuing a degree in computer science. 
            was introduced to web development in high school and cofounded a creative agency, <a href={'https://www.studiopluto.co'} target={'_blank'} rel={'noopener noreferrer'} className='text-violet-600 hover:text-violet-700'>Studio Pluto</a>. 
            as of late, i've been spending most of my time happily working on <a href={'https://www.latterhouse.ca'} target={'_blank'} rel={'noopener noreferrer'} className='text-violet-600 hover:text-violet-700'>Latter House</a> and <a href={'https://www.bypbj.co'} target={'_blank'} rel={'noopener noreferrer'} className='text-violet-600 hover:text-violet-700'>pbj</a>. <br /> <a href={'https://www.buymeacoffee.com/philjones'} target={'_blank'} rel={'noopener noreferrer'}>💜</a>
          </p>
          {/* <p className={styles.update}>updating</p> */}
        </div>

        {/* <h1>WORK</h1>
        <div className={styles.work}>
          <Tabs />
        </div> */}

        <h1>PROJECTS</h1>
        <div className={styles.projects}>
          <p>will put them here soon trust</p>
          {/* <Card2 />
          <Card3 />
          <Card1 /> */}
        </div>

        
          <div className='flex mt-20 justify-center'>
            <a href='mailto:philakagujones@gmail.com'>
              <Button
                auto
                rounded
                color="gradient"
                className='hover:translate-y-2'
              >
                Let's Work
              </Button>
            </a>
          </div>
       

      </main>

      <Footer />

    </div>
  )
}
