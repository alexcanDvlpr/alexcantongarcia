import { Image, Box, Text, Center } from '@chakra-ui/react'

const CustomImage = (props) => {
  return (
        <Box mb={8} boxShadow="md" borderWidth="1px" p="6" rounded="md" bg="white">
            <Image {...props} />
            <Center>
              <Text fontSize="sm" color="#011627" className="customImage__alt">{props.alt}</Text>
            </Center>
        </Box>
  )
}

export default CustomImage
