import { Container, Heading, Box, Center } from '@chakra-ui/react'
import AlexCantonHead from '../../components/AlexCantonHead'
import PostCard from '../../components/PostCard/PostCard'
import Header from '../../components/Header/Header'
import { getAllFilesMetadata } from '../../lib/mdx'
import { orderByDates } from '../../lib/date'

const Blog = ({ posts }) => {
  const metadata = { index: true, title: 'Blog | Alex Cantón', slug: 'blog', description: 'Blog de Alex Cantón García, en el que se hablará de tecnología, tutoriales de desarrollo web, desarrollo personal y las últimas tendencias y novedades del mercado del Software para tener informados a todo aquel que este iniciandose en este mundo como hobbie o para su carrera laboral.' }
  return (
    <>
      <AlexCantonHead metadata={metadata} />
      <div className="main">
        <Header showTitle={true} />
        <Container maxW="container.lg" className="blog-container">
          <Center className="last-articles-container">
            <Box className="last-articles-heading">
              <Heading className="underline" as="h2" size="xl">Últimos Artículos</Heading>
            </Box>
            <Box className="last-articles-content">
              {
                posts.map(post => (
                  <PostCard key={post.slug} post={post} />
                ))
              }
            </Box>
          </Center>
        </Container>
      </div>
    </>
  )
}

export default Blog

export async function getStaticProps () {
  const posts = await getAllFilesMetadata()
  posts.sort(orderByDates)

  return {
    props: {
      posts
    }
  }
}
