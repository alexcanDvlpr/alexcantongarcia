import { Container } from '@chakra-ui/react'
import AlexCantonHead from '../components/AlexCantonHead'
import MDXComponents from '../components/MDXComponents'
import Footer from '../components/Footer/Footer'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug } from '../lib/mdx'

const PoliticasDePrivacidad = ({ source }) => {
  const metadata = { title: 'Políticas de Cookies y Privacidad | Alex Cantón', index: false, description: 'Políticas de Cookies y Privacidad de alexcantongarcia.es', slug: 'politicas-de-privacidad' }

  return (
    <>
            <AlexCantonHead metadata={metadata} />
            <div className="main">
                <Container className="affiliates__section" as="section" maxW="container.lg" >
                    <div className="affiliates__content">
                      <MDXRemote {...source} components={MDXComponents} />
                    </div>
                </Container>
            </div >
            <Footer />
        </>
  )
}

export default PoliticasDePrivacidad

export async function getStaticProps () {
  const slug = 'privacidad'
  const { source } = await getFileBySlug(slug, 'pages')

  return {
    props: {
      source
    }
  }
}
