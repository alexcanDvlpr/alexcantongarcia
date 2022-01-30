import AlexCantonHead from '../components/AlexCantonHead'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header/Header'
import theme from '../styles/theme'
import '../styles/globals.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  /*
    Snippet for logging a user in and out of a page.
  */
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme} initialColorMode={theme.config.initialColorMode}>
      <AlexCantonHead />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
