import { Heading, Image } from '@chakra-ui/react'

const CompanySection = () => {

    return (
        <div className="companySection">
            <Heading as="h3" size="xl" color="gray.700">He trabajado con:</Heading>
            <div className="sliderCompanies">
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
                <Image boxSize="100px" objectFit="cover" src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
            </div>
        </div>
    )
}

export default CompanySection