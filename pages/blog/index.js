import { Container, Heading, Box, Center } from '@chakra-ui/react'
import AlexCantonHead from '../../components/AlexCantonHead'
import PostCard from '../../components/PostCard/PostCard'
import Header from '../../components/Header/Header'
import { getAllFilesMetadata } from '../../lib/mdx'
import { orderByDates } from '../../lib/date'

const Blog = ({ posts }) => {
  return (
    <>
      <AlexCantonHead index="true" title="Blog | Alex Cantón" />
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
