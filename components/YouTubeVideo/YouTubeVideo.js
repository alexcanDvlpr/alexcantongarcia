import { AspectRatio, Box } from '@chakra-ui/react'

const YoutubeVideo = ({ youtubeId, youtubeTitle }) => {
  return (
        <Box className="youtubeVideo-content">
            <Box w="100%" alignItems="center" className="youtubeVideo_content">
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={youtubeTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </AspectRatio>
            </Box>
        </Box>
  )
}

export default YoutubeVideo
