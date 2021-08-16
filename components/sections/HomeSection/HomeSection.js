/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import ScrollingIcon from '../../icons/ScrollingIcon'

const HomeSection = ({ }) => {
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
            <style jsx>
                {`
                    .homeSectionContent {
                        width: 100%;
                        height: auto;
                        min-height: 100vh;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                    }

                    .homeImageContent {
                        width: 40%;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        padding: 10px 25px 10px 15px;
                    }

                    .homeImageContent img {
                        width: 50%;
                        height: auto;
                        border-radius: 100%;
                        object-position: right;
                    }

                    .homeTitleContent {
                        width: 60%;
                        height: auto;
                    }

                    .homeText {
                        width: 75%;
                    }

                    .lastHomeTitle {
                        margin-bottom: 22px;
                    }

                    .scrolling-icon {
                        width: 100%;
                        height: 55px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        display: flex;
                        justify-content: center;
                    }

                    .scrolling-icon .icon {
                        animation: bounce 1s infinite;
                    }

                    @keyframes bounce {
                        0% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                        100% {
                            transform: translateY(0);
                        }
                    }
                    @media only screen and (max-width: 600px) {
                        .homeSectionContent {
                            margin-top: 60px;
                        }

                        .homeTitleContent {
                            width: 90%;
                            height: auto;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }

                        .homeTitle {
                            font-size: 34px !important;
                            text-align: center;
                        }

                        .lastHomeTitle {
                            margin-bottom: 24px;
                        }

                        .homeTitleContent {
                            width: 100%;
                        }

                        .homeImageContent {
                            display: none;
                        }

                        .scrolling-icon {
                            display: none;
                        }
                    }
                `}
            </style>
        </section>
    )
}

export default HomeSection