import { Box, Center, Text } from '@chakra-ui/react'

const Blockquote = ({ author = undefined, children }) => {
  return (
    <Center maxW="container.sm" p={4}>
      <Box w="80%">
        <blockquote className="blockquote">
          <Text fontSize="2xl">{children}</Text>
          {
            (author !== undefined)
              ? (
                <Box w="100%" py={4}>
                  <Text fontSize="2xl">- {author}</Text>
                </Box>
                )
              : ''
          }
        </blockquote>
      </Box>
    </Center>
  )
}

export default Blockquote
