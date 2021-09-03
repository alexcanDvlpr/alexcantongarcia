/* eslint-disable react/display-name */
import YoutubeVideo from './YouTubeVideo/YouTubeVideo'
import CustomImage from './CustomImage/CustomImage'
import ArticleLink from './ArticleLink/ArticleLink'
import { Heading, Text } from '@chakra-ui/react'
import Blockquote from './Blockquote/Blockquote'
import Separator from './Separator/Separator'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  h1: (props) => <Heading as="h1" mt={3} size="4xl" {...props} />,
  h2: (props) => <Heading as="h2" mt={3} size="3xl" {...props} />,
  h3: (props) => <Heading as="h3" mt={3} size="2xl" {...props} />,
  h4: (props) => <Heading as="h4" mt={3} size="xl" {...props} />,
  h5: (props) => <Heading as="h5" mt={3} size="lg" {...props} />,
  h6: (props) => <Heading as="h6" mt={3} size="md" {...props} />,
  p: (props) => <Text fontSize="lg" lineHeight={5} my={4} {...props} />,
  a: (props) => <ArticleLink {...props} />,
  img: (props) => <CustomImage {...props} />,
  Separator,
  YoutubeVideo,
  Blockquote
}
