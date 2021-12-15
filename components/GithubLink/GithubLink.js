import { Image, Text, Center } from '@chakra-ui/react'
import Link from 'next/link'

const GithubLink = ({ link = '', title = '' }) => {
  return (
    <Link href={link}>
      <a target="_blank" rel="noreferrer">
        <div className="github-link" mb={8} p={2}>
          <div className="github-icon-content">
            <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width={'60px'} height={'60px'} />
          </div>
          <Center>
          <Text className="github-title" py={1} px={4} color={'#333'} fontSize={'md'} fontWeight={'bold'}>{ title }</Text>
          </Center>
        </div>
      </a>
    </Link>
  )
}

export default GithubLink
