import { Avatar, Container, Heading, Text, Wrap } from "@chakra-ui/react";
import { getAllFilesMetadata } from "../../lib/mdx";
import { orderByDates } from "../../lib/date";
import Link from 'next/link'

const isProd = process.env.NODE_ENV === 'production'

const Blog = ({ posts }) => {
    const assetsPrefix = (isProd) ? '/alexcantongarcia/' : '/'

    return (
        <Container>
            {
                posts.map(post => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} m={5}>
                        <a m={5}>
                            <Heading as="h2" size="lg">{post.title}</Heading>
                            <Wrap>
                                <Avatar size="sm" name="Alex Cantón" src={`${assetsPrefix}${post.avatar}`} />
                                <Text as="p" size="sm">{post.author} - {post.date}</Text>
                            </Wrap>
                        </a>
                    </Link>
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