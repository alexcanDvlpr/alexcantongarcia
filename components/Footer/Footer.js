import { Grid, Container, Text, Center, Link } from '@chakra-ui/react'

const Footer = () => {
  const rss = [
    { link: 'https://twitter.com/AlexcanDvlpr', name: 'Twitter' },
    { link: 'https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa-2a5b7311a/', name: 'Linkedin' },
    { link: 'https://github.com/alexcanDvlpr', name: 'Github' },
    { link: 'https://www.instagram.com/alexcan.dvlpr/?hl=es', name: 'Instagram' }
  ]

  return (
        <footer className="footer">
            <Container maxW="container.lg">
                <Center>
                    <Grid templateColumns="repeat(4, 1fr)" gap={[2, 8, 8]}>
                        {
                            rss.map(link => (
                                <Link href={link.link} key={link.name} target="_blank" rel="noreferrer">
                                    <Text fontSize="lg">{link.name}</Text>
                                </Link>
                            ))
                        }
                    </Grid>
                </Center>
                <Center mt={7}>
                    <Grid>
                        <Text fontSize="lg">Creado con ❤️ por Alex Cantón</Text>
                    </Grid>
                </Center>
            </Container>
        </footer>
  )
}

export default Footer
