import { Avatar, Heading, Text, Wrap, Box, Tag } from '@chakra-ui/react'
import { formatDate } from '../../lib/date'
import Link from 'next/link'

const PostCard = ({ post }) => {
  const { title, avatar, slug, author, date, tags } = post

  return (
        <Box my={8}>
            <Link href={`/blog/${slug}`} >
                <a>
                    <Heading as="h3" size="lg">{title}</Heading>
                    <Wrap className="post-metadata" mt={3}>
                        <Avatar size="sm" name="Alex Cantón" src={`${avatar}`} />
                        <Text as="p" size="sm">{author} - {formatDate(date)}</Text>
                        {
                            tags.map(tag => (
                                <Tag mr={2} key={tag} colorScheme="red">{tag}</Tag>
                            ))
                        }
                    </Wrap>
                </a>
            </Link>
        </Box>
  )
}

export default PostCard
