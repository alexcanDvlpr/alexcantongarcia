import { Avatar, Heading, Text, Wrap, Box, Tag } from '@chakra-ui/react'
import { formatDate } from '../../lib/date'
import TAGS from '../../data/tags'
import Link from 'next/link'

const PostCard = ({ post }) => {
  const { title, slug, author, date, tags } = post

  return (
        <Box my={8}>
            <Link href={`/blog/${slug}`} >
                <a>
                    <Heading as="h3" size="lg">{title}</Heading>
                    <Wrap className="post-metadata" mt={3}>
                        <Avatar size="sm" name="Alex Cantón" src="https://res.cloudinary.com/dnnfr3jhi/image/upload/v1639592290/Blog/alex_r0u07u.webp" />
                        <Text as="p" size="sm">{author} - {formatDate(date)}</Text>
                        <Box>
                            {
                                tags.map(tag => (
                                    <Tag mr={2} key={tag} style={{ backgroundColor: TAGS[tag], color: '#fff' }}>{tag}</Tag>
                                ))
                            }
                        </Box>
                    </Wrap>
                </a>
            </Link>
        </Box>
  )
}

export default PostCard
