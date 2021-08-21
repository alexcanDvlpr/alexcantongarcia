import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import ScrollingIcon from '../../icons/ScrollingIcon'

const HomeSection = () => {
  return (
        <section className="homeSectionContent">
            <div className="homeImageContent">
                <img src="/avatar/alex.jpg" alt="123" />
            </div>
            <div className="homeTitleContent">
                <Heading className="homeTitle" as="h1" size="3xl">Hola,</Heading>
                <Heading className="homeTitle lastHomeTitle" as="h1" size="3xl">Soy Alex Cantón 👋</Heading>
                <Text className="homeText" mt={2} fontSize="2xl">Desarrollador web en Madrid, España. Tengo experiencia aplicando soluciones tanto en Backend como en Frontend.</Text>
                <Text className="homeText" fontSize="2xl" mt={2}>Durante este tiempo he trabajado con Spring Boot, JavaScript, TypeScript y Node.js,
                    y con distintas tecnologías como Docker y Docker Compose, AWS, CI/CD etc.</Text>
            </div>
            <div className="scrolling-icon">
                <div className="icon">
                    <ScrollingIcon fillColor="#00c896" />
                </div>
            </div>
        </section>
  )
}

export default HomeSection
