import { Heading, Image, Link } from '@chakra-ui/react'

const CompanySection = () => {
  return (
        <div className="companySection">
            <Heading as="h2" size="xl" mt={8} color="gray.700">He trabajado en:</Heading>
            <div className="sliderCompanies">
                <Link href="https://es.worldline.com/es/home.html" target="_blank" rel="noreferrer" className="companyLogo">
                    <Image boxSize="250px" src="/images/companySection/worldline.webp" alt="Worldline Iberia" />
                </Link>
                <Link href="https://www.gmv.com/es/" target="_blank" rel="noreferrer" className="companyLogo">
                    <Image boxSize="250px" src="/images/companySection/logo_gmv.svg" alt="GMV Innovating Solutions" />
                </Link>
                <Link href="https://www.bluetab.net/es/" target="_blank" rel="noreferrer" className="companyLogo">
                    <Image boxSize="250px" src="/images/companySection/bluetab.svg" alt="/Bluetab An IBM Company" />
                </Link>
            </div>
        </div>
  )
}

export default CompanySection
