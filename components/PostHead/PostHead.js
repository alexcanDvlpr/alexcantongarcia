import { Box, Text, Avatar, Tag, Heading } from '@chakra-ui/react'
import { formatDate } from '../../lib/date'

const PostHead = ({ metadata }) => {
    const { author = '', avatar = '', date = '', readingTime, tags, title = '' } = metadata

    let timeToRead = Math.round(readingTime.minutes)
    timeToRead = (timeToRead === 0) ? 1 : timeToRead

    const printMinutes = (minutes) => {
        return Math.trunc(minutes) + 1
    }

    return (
        <Box className="postHeader">
            <Heading as="h1" size="2xl">{title}</Heading>
            <Box className="metadata-content" mt={3}>
                <Box className="author-content">
                    <Avatar size="sm" name="Segun Adebayo" src={`/${avatar}`} />
                    <Text as="p" ml={4} fontSize="xl">{author}</Text>
                </Box>
                <Box className="article-metadata-content">
                    <Text className="publishOn" as="p" fontSize="md">📅 {formatDate(date)}</Text>
                    <Text className="headSeparator" mx={3}>|</Text>
                    <Text className="readingTime" as="p" fontSize="md">{`${printMinutes(readingTime.minutes)} Minutos de lectura`}</Text>
                </Box>
            </Box>
            <Box mt={3}>
                {
                    tags.map(tag => (
                        <Tag mr={2} key={tag} colorScheme="red">{tag}</Tag>
                    ))
                }
            </Box>
        </Box>
    )
}

export default PostHead