import { Image, Text } from '@chakra-ui/react'

const GithubLink = () => {
  return (
        <div className="github-link" mb={8} p={2}>
            <div className="github-icon-content">
                <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width={'60px'} height={'60px'} />
            </div>
                <Text pl={5} color={'#333'} fontSize={'lg'} fontWeight={'bold'}>¿Cómo crear un servidor web en JavaScript con Express?</Text>
        </div>
  )
}

export default GithubLink
