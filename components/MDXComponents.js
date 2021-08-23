/* eslint-disable react/display-name */
import { Heading, Image, Text } from '@chakra-ui/react'
import YoutubeVideo from './YouTubeVideo/YouTubeVideo'
import Separator from './Separator/Separator'
import Blockquote from './Blockquote/Blockquote'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  h1: (props) => <Heading as="h1" mt={8} size="4xl" {...props} />,
  h2: (props) => <Heading as="h2" mt={8} size="3xl" {...props} />,
  h3: (props) => <Heading as="h3" mt={8} size="2xl" {...props} />,
  h4: (props) => <Heading as="h4" mt={8} size="xl" {...props} />,
  h5: (props) => <Heading as="h5" mt={8} size="lg" {...props} />,
  h6: (props) => <Heading as="h6" mt={8} size="md" {...props} />,
  p: (props) => <Text fontSize="xl" lineHeight={5} my={4} {...props} />,
  img: (props) => <Image {...props} />,
  Separator,
  YoutubeVideo,
  Blockquote
}
