import React from 'react'
import { Heading, Avatar, Text, Link } from '@chakra-ui/react'
import styles from '../styles/components/Sidebar.module.css'

const assetPrefix = (process.env.assetPrefix === '') ? '/' : process.env.assetPrefix

const Sidebar = ({ }) => {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
            </head>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarWrapper}>
                    <header className={styles.header}>
                        <Heading as="h3" size="lg">Alex Cantón</Heading>
                    </header>
                    <section className={styles.avatarContent}>
                        <Avatar size="2xl" name="Alex Cantón" src={`${assetPrefix}avatar/alex.jpg`} />
                    </section>
                    <section className={styles.socialContent}>
                        <Text as="p">Sígueme en</Text>
                        <div className={styles.iconsContent}>
                            <Link href="https://www.linkedin.com/in/alejandro-cant%C3%B3n-garc%C3%ADa-2a5b7311a/" isExternal>
                                <i className={`${styles.socialIcon} fab fa-linkedin`}></i>
                            </Link>
                            <Link href="https://github.com/alexcanDvlpr" isExternal>
                                <i className={`${styles.socialIcon} fab fa-github`}></i>
                            </Link>
                            <Link href="https://twitter.com/ACanton97" isExternal>
                                <i className={`${styles.socialIcon} fab fa-twitter-square`}></i>
                            </Link>
                        </div>
                    </section>
                    { /* <section className={ styles.blogContent }>
                        <Text>Tambien puedes seguirme en</Text>
                        <Link>
                            <Text>Mi Blog</Text>
                        </Link>
                    </section> */ }
                </div>
            </aside>
        </>
    )
}

export default Sidebar