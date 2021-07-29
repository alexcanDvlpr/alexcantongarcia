import { Heading } from "@chakra-ui/react";
import YoutubeVideo from '../components/YouTubeVideo'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    YoutubeVideo,
    // eslint-disable-next-line react/display-name
    h1: (props) => <Heading as="h1" mt={3} size="3xl" {...props} />,

}