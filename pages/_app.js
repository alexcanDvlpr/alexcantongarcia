import '../styles/globals.css'
import theme from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} initialColorMode={theme.config.initialColorMode}>
      <head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
      </head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
