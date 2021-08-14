/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import styles from '../../styles/components/sections/HomeSection.module.css'

const HomeSection = ({ }) => {
    return (
        <section className={styles.homeSectionContent}>
            <div className={styles.homeImageContent}>
                <img src="/avatar/alex.jpg" alt="123" />
            </div>
            <div className={styles.homeTitleContent}>
                <Heading className={styles.homeTitle} as="h1" size="3xl">Hola,</Heading>
                <Heading className={`${styles.homeTitle} ${styles.lastHomeTitle}`} as="h1" size="3xl">Soy Alex Cantón 👋</Heading>
                <Text className={styles.homeText} mt={2} fontSize="2xl">Desarrollador web en Madrid, España. Tengo experiencia aplicando soluciones tanto en Backend como en Frontend.</Text>
                <Text className={styles.homeText} fontSize="2xl" mt={2}>Durante este tiempo he trabajado con Spring Boot, JavaScript, TypeScript y Node.js,
                    y con distintas tecnologías como Docker y Docker Compose, AWS, CI/CD etc.</Text>
            </div>
        </section>
    )
}

export default HomeSection