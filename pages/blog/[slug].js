import MDXComponents from '../../components/MDXComponents'
import { getFileBySlug, getFiles } from '../../lib/mdx'
import { Container } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

const Post = ({ source, frontmatter }) => {

    console.log(frontmatter)
    let timeToRead = Math.round(frontmatter.readingTime.minutes)
    timeToRead = (timeToRead === 0) ? 1 : timeToRead
    console.log(timeToRead)

    return (
        <Container maxW="container.lg">
            <MDXRemote {...source} components={MDXComponents} />
        </Container>
    )
}

export default Post

export async function getStaticProps({ params }) {
    const { slug } = params
    const { source, frontmatter } = await getFileBySlug(slug)

    return {
        props: {
            source,
            frontmatter
        }
    }
}

export async function getStaticPaths() {
    const post = await getFiles()
    const paths = post.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}