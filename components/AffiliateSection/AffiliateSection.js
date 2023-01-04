import { Heading, Flex, Center, Box } from '@chakra-ui/react'

const AffiliateSection = ({ title, products }) => {
    if (products.length === 0) {
        return null
    }

    return (
        <Box as={'section'}>
            <Box mt={5}>
                <Heading as={'h2'} size={'xl'}>{title}</Heading>
            </Box>
            <Center>
                <Flex w={'100%'} mt={4} wrap={'wrap'} justify={'flex-start'}>
                    {
                        products && products.map(product => (
                            <Box as="article" className='productsBox' key={product} dangerouslySetInnerHTML={{ __html: product }} />
                        ))
                    }
                </Flex>
            </Center>
        </Box>
    )
}

export default AffiliateSection
