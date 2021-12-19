import { Image, Box, Text, Center } from '@chakra-ui/react'

const CustomImage = (props) => {
  setTimeout(() => { console.clear() }, 250)

  return (
    <Center mb={8} boxShadow="md" borderWidth="1px" p="2" rounded="md" bg="white">
      <Box>
        <Image {...props} rounded="md" />
        <Center>
          <Text fontSize="sm" color="#011627" align={'center'} className="customImage__alt">{props.alt}</Text>
        </Center>
      </Box>
    </Center>
  )
}

export default CustomImage
