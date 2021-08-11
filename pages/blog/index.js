import { Avatar, Container, Heading, Text, Wrap, Box } from "@chakra-ui/react";
import { getAllFilesMetadata } from "../../lib/mdx";
import { orderByDates } from "../../lib/date";
import Link from 'next/link'

const isProd = process.env.NODE_ENV === 'production'

const Blog = ({ posts }) => {
    console.log(posts)
    const assetsPrefix = (isProd) ? '/alexcantongarcia/' : '/'

    return (
        <Container maxW="container.lg">
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas ipsum quis metus consequat, a cursus elit consequat. Phasellus sed orci et quam tempor feugiat a ut turpis. Sed eget condimentum neque. Nulla vehicula tellus non ipsum fringilla, vitae finibus magna faucibus. Nunc at nunc quis metus tempor accu</Text>
            {
                posts.map(post => (
                    <Box key={post.slug} my={8}>
                        <Link href={`/blog/${post.slug}`} >
                            <a>
                                <Heading as="h2" size="lg">{post.title}</Heading>
                                <Wrap>
                                    <Avatar size="sm" name="Alex Cantón" src={`${assetsPrefix}${post.avatar}`} />
                                    <Text as="p" size="sm">{post.author} - {post.date}</Text>
                                    <Text as="p" size="sm">{ post.tags.join(' ') }</Text>
                                </Wrap>
                            </a>
                        </Link>
                    </Box>
                ))
            }
        </Container>
    )
}

export default Blog;

export async function getStaticProps() {
    const posts = await getAllFilesMetadata()
    posts.sort(orderByDates)

    return {
        props: {
            posts
        }
    }
}