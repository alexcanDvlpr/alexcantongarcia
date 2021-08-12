import { Heading, Image } from '@chakra-ui/react'
import styles from '../../styles/components/sections/CompanySection.module.css'

const CompanySection = () => {

    return (
        <div className={ styles.companySection }>
            <Heading as="h3" size="xl" color="gray.700">He trabajado con:</Heading>
            <div className={styles.sliderCompanies}>
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
            </div>
        </div>
    )
}

export default CompanySection