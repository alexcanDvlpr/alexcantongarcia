import AlexCantonHead from '../components/AlexCantonHead'
import { Container, Box, Heading, Link, Image } from '@chakra-ui/react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Custom404Page = () => {
  return (
    <>
      <AlexCantonHead title="Ups... | Alex Cantón" />
      <div className="main">
        <Header showTitle={true} />
        <Container className="error404" as="section" maxW="container.lg" >
          <Box className="errorText">
            <Heading mb={4} as="h1" size="2xl">¡Vaya...!</Heading>
            <Heading mb={2} as="h2" size="lg">Parece que esta página no era lo que esperabas. Prueba a ir a mi blog y volver a empezar</Heading>
            <Link mt={4} href="https://www.alexcantongarcia.es/blog">
              <Heading as="h2" size="lg">Ir al Blog</Heading>
            </Link>
          </Box>
          <Image className="image404" src="/images/pages/404/404.webp" alt="404" />
        </Container>
      </div >
      <Footer />
    </>
  )
}

export default Custom404Page
