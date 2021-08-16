import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import '../styles/globals.css'
import '../styles/prism.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} initialColorMode={theme.config.initialColorMode}>
      <Head>
        <title>Bienvenido@ - Alex Cantón</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
