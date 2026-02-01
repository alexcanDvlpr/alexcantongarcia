import AlexCantonHead from '../components/AlexCantonHead'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container, Heading, Text, Box } from '@chakra-ui/react'
import Link from 'next/link'

const AffiliatePage = () => {

  const metadata = { title: 'Página Afiliación | Alex Cantón', index: false, slug: 'afiliados' }
  return (
        <>
            <AlexCantonHead metadata={metadata} />
            <div className="main">
                <Header showTitle={true} />
                <Container className="affiliates__section" as="section" maxW="container.lg" >
                    <div className="affiliates__content">
                        <Heading size="xl">Bienvenidos a la página de Afiliación</Heading>
                        <Text mt={2} fontSize="lg">
                            En esta sección, tendremos los distintos productos de Amazon que he comprado y os recomiendo a todos vosotros.
                        </Text>
                        <Box as={'main'} w={'100%'}>
                            <Link target="_blank" href="https://amzn.to/3MgMut2">Enlace aquí</Link>
                        </Box>
                    </div>
                </Container>
            </div >
            <Footer />
        </>
  )
}

export default AffiliatePage
