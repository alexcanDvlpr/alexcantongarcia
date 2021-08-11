import { Image, Box } from "@chakra-ui/react"

const CustomImage = (props) => {
    return (
        <Box boxShadow="md" borderWidth="1px" p="6" rounded="md" bg="white">
            <Image {...props} />
        </Box>
    );
};

export default CustomImage