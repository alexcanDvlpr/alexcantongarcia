import { Container, Grid, GridItem } from '@chakra-ui/react'
import MDXComponents from '../components/MDXComponents'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug } from '../lib/mdx'

const About = ({ source }) => {
  return (
    <>
      <div className="main">
        <Header showTitle={true} />
        <Container className="aboutme__section" as="section" maxW="container.lg" >
          <Grid templateColumns="repeat(8, 1fr)" gap={2}>
            <GridItem colSpan="1"></GridItem>
            <GridItem className="aboutme__content" px={5} colSpan="6" bg="red.100">
              <MDXRemote {...source} components={MDXComponents} />
            </GridItem>
            <GridItem colSpan="1"></GridItem>
          </Grid>
        </Container>
      </div >
      <Footer />
    </>
  )
}

export default About

export async function getStaticProps () {
  const slug = 'about'
  const { source } = await getFileBySlug(slug, 'pages')

  return {
    props: {
      source
    }
  }
}
