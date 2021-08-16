import MDXComponents from '../../components/MDXComponents'
import { getFileBySlug, getFiles } from '../../lib/mdx'
import Header from '../../components/Header/Header'
import { Box, Text, Avatar, Tag, Container } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

const Post = ({ source, frontmatter }) => {
    const { author = '', avatar = '', date = '', readingTime, tags, title = '' } = frontmatter

    let timeToRead = Math.round(frontmatter.readingTime.minutes)
    timeToRead = (timeToRead === 0) ? 1 : timeToRead

    const printMinutes = (minutes) => {
        return Math.trunc(minutes) + 1
    }

    return (
        <div className="main">
            <Header showTitle={true} />
            <Container maxW="container.lg" style={{ marginTop: '78px' }}>
                <Box>
                    <Text as="p" fontSize="md">{author}</Text>
                    <Text as="p" fontSize="md">{date}</Text>
                    <Text as="p" fontSize="md">{title}</Text>
                    <Text as="p" fontSize="md">{`${printMinutes(readingTime.minutes)} Minutos de lectura`}</Text>
                    <Avatar name="Segun Adebayo" src={`/${avatar}`} />
                    {
                        tags.map(tag => (
                            <Tag key={tag}>{tag}</Tag>
                        ))
                    }
                </Box>
                <MDXRemote {...source} components={MDXComponents} />
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