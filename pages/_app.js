import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
      <meta name="theme-color" content="currentColor" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
