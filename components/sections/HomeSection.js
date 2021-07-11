import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import styles from '../../styles/components/sections/HomeSection.module.css'

const HomeSection = ({  }) => {
    return (
        <section className={ styles.homeSectionContent }>
            <div className={ styles.homeTitleContent }>
                <Heading as="h1" size="3xl">Hola,</Heading>
                <Heading as="h1" size="3xl">Soy Alex Cantón 👋</Heading>
                <Text className={ styles.homeText } fontSize="md" mt={2} color="gray.300">Desarrollador web en Madrid, España. Tengo 4 años de experiencia tanto en Backend como en Frontend.
                 He trabajado para empresas como <b>Worldline Iberia</b> , <b>GMV Innovating Solutions</b> o <b>/Bluetab</b>.</Text>
                 <Text className={ styles.homeText } fontSize="md" mt={2} color="gray.300">Durante este tiempo he aplicado soluciones con Java, JavaScript, TypeScript y Node.js,
                 y con distintas tecnologías como Docker y Docker Compose, AWS, CI/CD etc.</Text>
            </div>
        </section>
    )
}

export default HomeSection