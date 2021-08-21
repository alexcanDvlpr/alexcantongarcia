import { Container, Heading, Text } from '@chakra-ui/react'

const AboutSection = () => {
  return (
        <Container className="aboutSection" my={8} maxW="container.md">
            <Heading as="h3" mb={4} size="xl">Sobre mí</Heading>
            <Text mt={2} fontSize="2xl">
                Como ya sabrás soy <b>Alex</b> y te quiero dar la bienvenida a mi web.
            </Text>
            <Text mt={3} fontSize="2xl">
                Actualmente trabajo como Desarrollador FullStack con Javascript, con Node.js en la parte backend y con Angular en la parte de Front. Eso no quiere decir que no sienta una curiosidad inmensa por el resto de tecnologias.
            </Text>
            <Text mt={3} fontSize="2xl">
                Desde la cuarentena que pasamos por el Covid, saco tiempo para aprender React, Docker 🐳 y sobre arquitectura de software y cloud. ☁️
            </Text>
            <Text mt={3} fontSize="2xl">
                En lo personal, me gusta jugar videojuegos 🕹️, aprender cosas nuevas (no todo es programar), el Baloncesto 🏀 y la cerveza artesana 🍺, aunque si esta se le añade buena compañía mejor que mejor.
            </Text>
        </Container>
  )
}

export default AboutSection
