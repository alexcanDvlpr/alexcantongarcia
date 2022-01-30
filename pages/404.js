import AlexCantonHead from '../components/AlexCantonHead'
import { Container, Box, Heading, Link, Image } from '@chakra-ui/react'
import Footer from '../components/Footer/Footer'

const Custom404Page = () => {
  const metadata = { title: 'Ups... | Alex Cantón', index: false }
  return (
    <>
      <AlexCantonHead metadata={ metadata } />
      <div className="main">
        <Container className="error404" as="section" maxW="container.lg" >
          <Box className="errorText">
            <Heading mb={4} as="h1" size="2xl">¡Vaya...!</Heading>
            <Heading mb={2} as="h2" size="lg">Parece que esta página no era lo que esperabas. Prueba a ir a mi blog y volver a empezar</Heading>
            <Link mt={4} href="https://www.alexcantongarcia.es/blog">
              <Heading as="h2" size="lg">Ir al Blog</Heading>
            </Link>
          </Box>
          <Image className="image404" src="https://res.cloudinary.com/dnnfr3jhi/image/upload/v1639607618/Blog/404_yqm9dc.webp" alt="404" />
        </Container>
      </div >
      <Footer />
    </>
  )
}

export default Custom404Page
