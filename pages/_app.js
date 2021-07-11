import '../styles/globals.css'
import theme from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ theme } initialColorMode={theme.config.initialColorMode}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
