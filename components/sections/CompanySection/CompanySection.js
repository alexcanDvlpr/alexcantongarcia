import { Heading, Image } from '@chakra-ui/react'
import styles from '../../../styles/components/sections/CompanySection.module.css'

const CompanySection = () => {

    return (
        <div className={ styles.companySection }>
            <Heading as="h3" size="xl" color="gray.700">He trabajado con:</Heading>
            <div className={styles.sliderCompanies}>
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
            </div>
            <style jsx>
                {`
                    .companySection {
                        width: 100%;
                        min-height: 250px;
                        height: auto;
                        background-color: #00c896;
                        background-image: radial-gradient(#1A202C 0.2px, transparent 1px),
                        radial-gradient(#1A202C 0.2px, transparent 1px);
                        background-position: 0 0, 25px 25px;
                        background-size: 50px 50px;
                        color: #1A202C;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .sliderCompanies {
                        width: 80%;
                        height: 100%;
                        padding: 10px 30px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                    }

                    @media only screen and (max-width: 600px) {
                        .sliderCompanies {
                            width: 100%;
                            min-height: 100%;
                            height: auto;
                            display: flex;
                            overflow-x: scroll;
                            scroll-padding: 0 50%;
                            scroll-snap-type: x mandatory;
                        }

                        .sliderCompanies img {
                            flex: 0 0 100%;
                            width: initial;
                            height: inherit;
                            object-fit: initial;
                            scroll-snap-align: center;
                            margin-left: 20px;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default CompanySection