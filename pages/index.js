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
            Hello my name is Phil. I am in my third year at Simon Fraser University where I am pursuing a degree in computer science. 
            I was introduced to web development in 2018 and in high school I cofounded a creative agency, <a href={'https://www.studiopluto.co'} target={'_blank'} rel={'noopener noreferrer'} className='text-violet-600 hover:text-violet-700'>Studio Pluto</a>, which specializes in creative web design and branding. 
            As of late, we've been developing a modern Shopify theme for creatives which is now available. These days I spend a lot of my time working on the iPhone case start-up which I recently cofounded, <a href={'https://www.clogtopia.com'} target={'_blank'} rel={'noopener noreferrer'} className='text-violet-600 hover:text-violet-700'>Clogtopia</a>, with hopes of launching that soon as well. 
            In my free time, I make designs for <a href={'https://www.latterhouse.ca'} target={'_blank'} rel={'noopener noreferrer'} className='text-violet-600 hover:text-violet-700'>Latter House</a>, or create small automation scripts to help simplify life. <br /> <a href={'https://www.buymeacoffee.com/philjones'} target={'_blank'} rel={'noopener noreferrer'}>💜</a>
          </p>
        </div>

        <h1>WORK</h1>
        <div className={styles.work}>
          <Tabs />
        </div>

        <h1>PROJECTS</h1>
        <div className={styles.projects}>
          <Card2 />
          <Card3 />
          <Card1 />
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
