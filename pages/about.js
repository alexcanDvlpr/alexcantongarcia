import MDXComponents from '../components/MDXComponents'
import { Container } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug } from '../lib/mdx'

const About = ({ source }) => {
  return (
    <div className="main">
      <Container className="aboutme__section" as="section" maxW="container.lg" style={{ marginTop: '78px' }}>
          <MDXRemote {...source} components={MDXComponents} />
        </Container>
    </div >
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
