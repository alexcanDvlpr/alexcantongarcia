import { Grid, Container, Text, Center, Link } from '@chakra-ui/react'

const Footer = () => {
  const rss = [
    { link: 'https://www.linkedin.com/in/alejandro-cantón-garcía', name: 'Linkedin' },
    { link: 'https://github.com/alexcanDvlpr', name: 'Github' },
    { link: 'https://www.instagram.com/alexcan.dvlpr/?hl=es', name: 'Instagram' },
    { link: 'https://www.alexcantongarcia.es/afiliados', name: 'Afiliados' }
  ]

  const privacy = [
    { link: '/politicas-de-cookies', name: 'Políticas de Cookies' },
    { link: '/politicas-de-privacidad', name: 'Políticas de Privacidad' }
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
                <Center mt={5}>
                    <Grid className="politicas_box" templateColumns="repeat(2, 1fr)" gap={[2, 8, 8]}>
                        {
                            privacy.map(link => (
                                <Link href={link.link} key={link.name} target="_blank" rel="noreferrer">
                                    <Text fontSize="lg">{link.name}</Text>
                                </Link>
                            ))
                        }
                    </Grid>
                </Center>
                <Center pt={5}>
                    <Grid>
                        <Text fontSize="lg">Creado con ❤️ por Alex Cantón</Text>
                    </Grid>
                </Center>
            </Container>
        </footer>
  )
}

export default Footer
