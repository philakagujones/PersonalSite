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
            Hello my name is Phil. I am currently in my second year at Simon Fraser University pursuing a degree in computer science. 
            I was introduced to web development in 2018 and in high school I cofounded a creative agency, <a href={'https://www.studiopluto.co'} target={'_blank'} rel={'noopener noreferrer'} className='text-stone-500 hover:text-stone-400'>Studio Pluto</a>, which specializes in the creation of websites. 
            As of late, I've been given the privelege of working at an indie game studio so these days I spend most of my time playing around in Unity and with C#. 
            In my free time, I work on <a href={'https://www.drabble.app'} target={'_blank'} rel={'noopener noreferrer'} className='text-stone-500 hover:text-stone-400'>Drabble</a>, make designs or create small automation scripts to help simplify life. <br /> 🤎
          </p>
        </div>

        <h1>WORK</h1>
        <div className={styles.work}>
          <Tabs />
        </div>

        <h1>PROJECTS</h1>
        <div className={styles.projects}>
          <Card1 />
          <Card2 />
          <Card3 />
        </div>

        
          <div className='flex mt-20 justify-center'>
            <a href='mailto:philakagujones@gmail.com'>
              <Button
                auto
                rounded
                color="gradient"
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
