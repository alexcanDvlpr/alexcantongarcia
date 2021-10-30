import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} initialColorMode={theme.config.initialColorMode}>
      <Head>
        <title>Alex Cantón</title>
        <meta name="description" content="Mi nombre es Alex Cantón y soy desarrollador web desde el 2017 en Madrid, España. Esta es mi web junto con mi blog en la que quiero compartir conocimiento, enseñar nuevas tecnologías y enseñar JavaScript desde 0 para gente que este estudiando o se este abriendo camino en el mundo laboral." />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
