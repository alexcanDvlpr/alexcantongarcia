import { getFileBySlug, getFiles } from "../../lib/mdx"
import MDXComponents from '../../components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import { Container } from "@chakra-ui/react"

const Post = ({ source, frontmatter }) => {

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