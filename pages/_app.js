import AlexCantonHead from '../components/AlexCantonHead'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} initialColorMode={theme.config.initialColorMode}>
      <AlexCantonHead />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
