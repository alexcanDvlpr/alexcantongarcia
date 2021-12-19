/* eslint-disable react/display-name */
import { Heading, UnorderedList, OrderedList, ListItem, Text } from '@chakra-ui/react'
import YoutubeVideo from './YouTubeVideo/YouTubeVideo'
import CustomImage from './CustomImage/CustomImage'
import Blockquote from './Blockquote/Blockquote'
import GithubLink from './GithubLink/GithubLink'
import Separator from './Separator/Separator'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  h1: (props) => <Heading as="h1" mt={3} size="3xl" {...props} />,
  h2: (props) => <Heading as="h2" mt={3} size="2xl" {...props} />,
  h3: (props) => <Heading as="h3" mt={3} size="xl" {...props} />,
  h4: (props) => <Heading as="h4" mt={3} size="lg" {...props} />,
  h5: (props) => <Heading as="h5" mt={3} size="lg" {...props} />,
  h6: (props) => <Heading as="h6" mt={3} size="md" {...props} />,
  p: (props) => <Text fontSize="lg" lineHeight={5} my={4} {...props} />,
  a: (props) => <a {...props} className="article-link" target="_blank" rel="noreferrer">{props.children}</a>,
  img: (props) => <CustomImage {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => (
    <ListItem>
      {props.children}
    </ListItem>
  ),
  Separator,
  YoutubeVideo,
  Blockquote,
  GithubLink
}
