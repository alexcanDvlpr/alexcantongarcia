import MDXComponents from '../../components/MDXComponents'
import PostHead from '../../components/PostHead/PostHead'
import { getFileBySlug, getFiles } from '../../lib/mdx'
import Header from '../../components/Header/Header'
import { Box, Container } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

const Post = ({ source, frontmatter }) => {

    return (
        <div className="main">
            <Header showTitle={true} />
            <Container maxW="container.lg" style={{ marginTop: '78px' }}>
                <PostHead metadata={{...frontmatter}} />
               <Box className="article-content" mt={8}>
                <MDXRemote {...source} components={MDXComponents} />
               </Box>
            </Container>
        </div >
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