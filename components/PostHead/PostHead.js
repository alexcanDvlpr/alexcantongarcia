import { Box, Text, Avatar, Tag, Heading } from '@chakra-ui/react'
import { formatDate } from '../../lib/date'
import TAGS from '../../data/tags'

const PostHead = ({ metadata }) => {
  const { author = '', avatar = '', date = '', readingTime, tags, title = '' } = metadata

  let timeToRead = Math.round(readingTime.minutes)
  timeToRead = (timeToRead === 0) ? 1 : timeToRead

  const printMinutes = (minutes) => {
    return Math.trunc(minutes)
  }

  return (
        <Box className="postHeader">
            <hr className="singleArticleSeparator" />
            <Heading as="h1" size="2xl">{title}</Heading>
            <Box className="metadata-content" mt={3}>
                <Box className="author-content">
                    <Avatar size="sm" name={author} src={`${avatar}`} />
                    <Text as="p" ml={4} fontSize="lg">{author}</Text>
                </Box>
                <Box className="article-metadata-content">
                    <Text className="publishOn" as="p" fontSize="md">📅 &nbsp; {formatDate(date)}</Text>
                    <Text className="headSeparator" mx={3}>|</Text>
                    <Text className="readingTime" as="p" fontSize="md">{`${printMinutes(timeToRead)} Minutos de lectura`}</Text>
                </Box>
            </Box>
            <Box mt={3}>
                {
                    tags.map(tag => (
                        <Tag mr={2} key={tag} style={ { backgroundColor: TAGS[tag], color: '#fff' } }>{tag}</Tag>
                    ))
                }
            </Box>
        </Box>
  )
}

export default PostHead
